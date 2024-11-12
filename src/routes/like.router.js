import express from "express"
import likeController from "../controllers/like.controller.js"

const likeRouter = express.Router()

likeRouter.get("/like-user/:id",likeController.likeUser)
likeRouter.post("/user-like-restaurant",likeController.addUserLikeRestaurant)
likeRouter.get("/like-restaurant/:id",likeController.likeRestaurant)
likeRouter.delete("/user-dislike-restaurant/:userId/:resId", likeController.dislikeRestaurant);

export default likeRouter