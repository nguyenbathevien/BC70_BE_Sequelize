import express from "express"
import evaluteController from "../controllers/evalute.controller.js"

const evaluteRouter = express.Router()
evaluteRouter.post("/user-evalute-restaurant",evaluteController.addUserEvaluteRestaurant)
evaluteRouter.get("/evalue-user/:id",evaluteController.evaluteUser)
evaluteRouter.get("/evalue-restaurant/:id",evaluteController.evaluteRestaurant)


export default evaluteRouter