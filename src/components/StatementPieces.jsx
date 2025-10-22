// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import StatementPiece from "./PencilBoys"

const StatementPieces = () => {
  // useEffect(() => {
  //   fetch()
  // }, [])
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.5 }}
      className="h-fit my-5"
    >
      <div className="flex flex-col justify-center items-center px-4 text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">STATEMENT PIECES WITH A STORY BEHIND EVERY STITCH</h1>
        <p className="text-sm uppercase text-neutral-500">Curated chaos. Designed by Panache.</p>
        work in progress my dudes
        <br />
        will be replaced with a carousel
      </div>
    </motion.section>
  )
}

export default StatementPieces
