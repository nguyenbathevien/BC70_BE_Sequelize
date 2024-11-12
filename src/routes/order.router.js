import express from "express"
import orderController from "../controllers/order.controller.js"

const orderRouter = express.Router()

orderRouter.post("/order-food", orderController.orderFood)

export default orderRouter