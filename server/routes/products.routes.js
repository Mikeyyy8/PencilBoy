import express from "express"
import { getProducts, createProduct } from "../controllers/product.controller.js"
import { isAdmin } from "../middleware/isAdmin.middleware.js"

const router = express.Router()
router.route("/").get(getProducts).post(isAdmin, createProduct)

export default router