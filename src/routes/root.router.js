import express from "express"
import likeRouter from "./like.router.js"
import evaluteRouter from "./evalute.router.js"
import orderRouter from "./order.router.js"

const rootRouter = express.Router()
//cau 1 like,unlike
rootRouter.use("/like",likeRouter)
//cau 2 danh gia
rootRouter.use("/evalute",evaluteRouter)
//cau 3 order
rootRouter.use("/order",orderRouter)

export default rootRouter