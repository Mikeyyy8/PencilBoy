import {prisma} from '../prisma/client.js';


export const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany()
    if (!products) {
      res.status(400).json({message: "No items found"})
    }
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: `Server error: ${err.message}` })
  }
};


export const createProduct = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;

    if (!name || !price) {
      return res.status(400).json({ error: 'Name and price are required' })
    }

    const product = await prisma.product.create({
      data: { name, price, description, category },
    });

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: `Server error: ${err.message}` });
  }
};

export const searchProduct = async (req, res) => {
  const {q} = req.query
  try{
    const products = await prisma.product.findMany({
      where: {
        OR: [
          { name: { contains: q, mode: 'insensitive' } },
          { description: { contains: q, mode: 'insensitive' } },
        ],
      },
    });
    if (!products || products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: `Server error: ${err.message}` });
  }
}