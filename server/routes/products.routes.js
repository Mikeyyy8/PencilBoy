import express from "express"
import { getProducts, createProduct, searchProduct } from "../controllers/product.controller.js"
import { isAdmin } from "../middleware/isAdmin.middleware.js"

const router = express.Router()
router.route("/").get(getProducts).post(isAdmin, createProduct)

router.get("/products/search", searchProduct)

export default router