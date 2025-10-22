// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const AffiliatedBrands = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.5 }}
      className="px-5 my-4 space-y-5 overflow-x-hidden"
    >
        <motion.div
          initial={{opacity: 0, x: -150}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 0.9}}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-center">THE PENCIL BOYS</h1>
        </motion.div>
      {/*There is going to be a carousel here*/}
      <p className="text-justify">There is going to be a carousel here, or something that I can use to show the rest of the brands affiliated with pencil boy</p>
    </motion.section>
  )
}

export default AffiliatedBrands
