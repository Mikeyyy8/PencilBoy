import { useState, useEffect } from 'react'

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import TopBar from "../components/shopRouteComponents/TopBar";
import ShopBanner from "../components/shopRouteComponents/ShopBanner";
import Product from "../components/shopRouteComponents/Product";
import IndexControls from "../components/shopRouteComponents/IndexControls";



const Shop = () => {

  useEffect(() => {
    // Fetch categories from API when component mounts
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}/api/products`)
        const data = await response.json()
        console.log('Fetched products:', data)
        setProducts(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    };
    fetchProducts();
  }, [])

  const [products, setProducts] = useState([])

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      className="mb-5"
    >
      <TopBar />
      <ShopBanner />
      <section className="my-5 grid grid-cols-2 lg:grid-cols-4 gap-2 mx-5 lg:mx-15">

        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </section>
      <div className="w-full place-items-center">
        <IndexControls />
      </div>
    </motion.section>
  );
};

export default Shop;
