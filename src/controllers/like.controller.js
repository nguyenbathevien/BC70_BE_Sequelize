import { responseSuccess } from "../common/helpers/response.helper.js";
import likeService from "../services/like.service.js";


const likeController = {
    likeUser: async(req,res,next) => {
        try {
            const userId = req.params.id; 
            const result = await likeService.likeUser(userId);
            const resData = responseSuccess(result,'Lay nha hang da like cua user thanh cong')
            res.status(resData.code).json(resData);
        } catch (error) {
            next(error)
        }
    },
    likeRestaurant: async(req,res,next) => {
        try {
            const result = await likeService.likeRestaurant()
            const resData = responseSuccess(result,'Lay user da Like Nha hang thanh cong')
            res.status(resData.code).json(resData);
        } catch (error) {
            next(error)
        }
    }
}

export default likeController