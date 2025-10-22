import { useState, useEffect } from 'react'

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import TopBar from "../components/shopRouteComponents/TopBar";
import ShopBanner from "../components/shopRouteComponents/ShopBanner";
import Product from "../components/shopRouteComponents/Product";
import IndexControls from "../components/shopRouteComponents/IndexControls";

import ProductSkeleton from '../components/shopRouteComponents/ProductSkeleton';



const Shop = () => {

  useEffect(() => {
    // Fetch categories from API when component mounts
    const fetchProducts = async () => {
      try {
        setIsLoading(true)
        // const response = await fetch(`${import.meta.env.BASE_URL}/api/products`)
        const response = await fetch(`http://localhost:5000/products`)
        const data = await response.json()
        console.log('Fetched products:', data)
        setProducts(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setIsLoading(false)
      }
    };
    fetchProducts();
  }, [])

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false);

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
      <section className="my-5 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-1 mx-5 lg:mx-15">

        {isLoading ? Array(3).fill().map((_, i) => <ProductSkeleton key={i} />) :  products.map((product) => (
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
