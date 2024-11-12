import LikeResModel from "../models/likeRes.model.js";
import RestaurantModel from "../models/restaurant.model.js";
import UserModel from "../models/user_model.js";

const likeService = {
    likeUser: async(userId) => {
        try {
            
            const result = await LikeResModel.findAll({
                where: { user_id: Number(userId) },
                include: [{ model: RestaurantModel, as: 'restaurant' }]
            });
            console.log(result)
            return result;
        } catch (error) {
            throw error;
        }
    },
    likeRestaurant: async(resID) => {
        try {
            const result = await LikeResModel.findAll({
                where: {
                    res_id: Number(resID)
                },
                include:[{model: UserModel,  as: 'user'}]
            })
            return result
        } catch (error) {
            throw error
        }
    },
    addUserLikeRestaurant: async (userId, resId) => {
        try {
            const restaurantExists = await RestaurantModel.findByPk(resId);
            if (!restaurantExists) {
                return { message: `Nhà hàng với ID ${resId} không tồn tại.` };
            }
    
            const userExists = await UserModel.findByPk(userId);
            if (!userExists) {
                return { message: `User với ID ${userId} không tồn tại.` };
            }
    
            const existingLike = await LikeResModel.findOne({
                where: { user_id: userId, res_id: resId }
            });
    
            if (existingLike) {
                return { message: "User đã like nhà hàng này rồi", existingLike };
            }
    
            const newLike = await LikeResModel.create({
                user_id: userId,
                res_id: resId,
                date_like: new Date()
            });
            
            return newLike;
        } catch (error) {
            throw error;
        }
    },
    
    dislikeRestaurant: async (userId, resId) => {
        try {
            const deletedLike = await LikeResModel.destroy({
                where: {
                    user_id: userId,
                    res_id: resId
                }
            });
    
            if (deletedLike) {
                return { message: "User đã dislike nhà hàng thành công" };
            } else {
                return { message: "Không tìm thấy user_id hoặc res_id" };
            }
        } catch (error) {
            throw error;
        }
    }
    
    
}

export default likeService