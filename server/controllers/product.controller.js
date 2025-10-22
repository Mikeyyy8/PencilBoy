import {prisma} from '../prisma/client.js';


export const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: `Server error: ${err.message}` });
  }
};


export const createProduct = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;

    if (!name || !price) {
      return res.status(400).json({ error: 'Name and price are required' });
    }

    const product = await prisma.product.create({
      data: { name, price, description, category },
    });

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: `Server error: ${err.message}` });
  }
};
