import { useQuery } from "@tanstack/react-query";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import TopBar from "../components/shopRouteComponents/TopBar";
import ShopBanner from "../components/shopRouteComponents/ShopBanner";
import Product from "../components/shopRouteComponents/Product";
import IndexControls from "../components/shopRouteComponents/IndexControls";

import ProductSkeleton from "../components/shopRouteComponents/ProductSkeleton";

const Shop = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"], // unique key for caching
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/products");
      if (!res.ok) throw new Error("Failed to fetch products");
      return res.json();
    },
  });

  if (isLoading) {
    return (
      <div className="my-5 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-1 mx-5 lg:mx-15">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
      </div>
    );
  }

  if (isError) {
    return <p className="text-red-500 text-center">Error: {error.message}</p>;
  }

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
