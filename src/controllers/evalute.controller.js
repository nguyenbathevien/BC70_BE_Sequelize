import { responseSuccess } from "../common/helpers/response.helper.js";
import RestaurantModel from "../models/restaurant.model.js";
import UserModel from "../models/user_model.js";
import evaluteService from "../services/evalute.service.js";


const evaluteController = {
    addUserEvaluteRestaurant: async(req, res,next) => {
        try {
            const {userId,resId,amount} = req.body 
            const result = await evaluteService.addUserEvaluteRestaurant(userId,resId,amount)
            if (result.message) {
                const resData = responseSuccess(result.existingRating, result.message);
                return res.status(resData.code).json(resData);
            }
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
            const resData = responseSuccess(result, `User ${user.full_name} đã đánh giá nhà hàng ${restaurant.res_name} thành công`);
            res.status(resData.code).json(resData);
        } catch (error) {
            next(error)
        }
    },
    evaluteUser: async(req,res,next) => {
        try {
            const userId = req.params.id;
            console.log(userId)
            const result = await evaluteService.evaluteUser(userId);
            console.log(result)
            const user = await UserModel.findByPk(userId);

            if (!user) {
                return res.status(404).json({
                    message: "Người dùng không tồn tại."
                });
            }
           
            const resData = responseSuccess(result,`lấy danh sách đánh giá nhà hàng của user ${user.full_name}  thành công`)
            res.status(resData.code).json(resData);
        } catch (error) {
            next(error)
        }
    },  
    evaluteRestaurant: async(req,res,next) => {
        try {
            const resId = req.params.id
            const result = await evaluteService.evaluteRestaurant(resId)
            
            const restaurant = await RestaurantModel.findByPk(resId);

            if (!restaurant) {
                return res.status(404).json({
                    message: "Nhà hàng không tồn tại."
                });
            }
            const resData = responseSuccess(result,`Lấy danh sách user đã dánh giá nhà hàng ${restaurant.res_name} thành công`)
            res.status(resData.code).json(resData);
        } catch (error) {
            next(error)
        }
    },
    
}

export default evaluteController