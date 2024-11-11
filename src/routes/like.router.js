import express from "express"
import likeController from "../controllers/like.controller.js"

const likeRouter = express.Router()

likeRouter.get("/like-user/:id",likeController.likeUser)
likeRouter.get("/like-restaurant",likeController.likeRestaurant)

export default likeRouter