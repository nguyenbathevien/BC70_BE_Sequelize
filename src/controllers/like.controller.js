import { responseSuccess } from "../common/helpers/response.helper.js";
import RestaurantModel from "../models/restaurant.model.js";
import UserModel from "../models/user_model.js";
import likeService from "../services/like.service.js";


const likeController = {
    likeUser: async(req,res,next) => {
        try {
            const userId = req.params.id;
            console.log(userId)
            const user = await UserModel.findByPk(userId);

            if (!user) {
                return res.status(404).json({
                    message: "Người dùng không tồn tại."
                });
            }
            const result = await likeService.likeUser(userId);
            console.log(result)
            const resData = responseSuccess(result,`Lay nha hang da like cua user ${user.full_name} thanh cong`)
            res.status(resData.code).json(resData);
        } catch (error) {
            next(error)
        }
    },
    likeRestaurant: async(req,res,next) => {
        try {
            const resId = req.params.id
            const result = await likeService.likeRestaurant(resId)
           
            const resData = responseSuccess(result,'Lấy danh sách user đã like nhà hàng thành công')
            res.status(resData.code).json(resData);
        } catch (error) {
            next(error)
        }
    },
    addUserLikeRestaurant: async(req, res, next) => {
        try {
            const { userId, resId } = req.body;
            const result = await likeService.addUserLikeRestaurant(userId, resId);
            const user = await UserModel.findByPk(userId);

            if (!user) {
                return res.status(404).json({
                    message: "Người dùng không tồn tại."
                });
            }
            const restaurant = await RestaurantModel.findByPk(resId);

            if (!restaurant) {
                return res.status(404).json({
                    message: "Nhà hàng không tồn tại."
                });
            }
            if (result.message) {
                const resData = responseSuccess(result.existingLike, result.message);
                return res.status(resData.code).json(resData);
            }
    
            const resData = responseSuccess(result, `User ${user.full_name} đã like nhà hàng ${restaurant.res_name} thành công`);
            res.status(resData.code).json(resData);
    
        } catch (error) {
            next(error);
        }
    },
    dislikeRestaurant: async (req, res, next) => {
        try {
            const { userId, resId } = req.params;
            const result = await likeService.dislikeRestaurant(userId, resId);
    
            const resData = responseSuccess(null, result.message);
            res.status(resData.code).json(resData);
        } catch (error) {
            next(error);
        }
    }
    
    
}

export default likeController