import LikeResModel from "../models/likeRes.model.js";
import RestaurantModel from "../models/restaurant.model.js";

const likeService = {
    likeUser: async(userId) => {
        try {
            const result = await LikeResModel.findAll({
                where: { user_id: userId },
                include: [{ model: RestaurantModel, as: 'restaurant' }] // Join với bảng restaurant để lấy thông tin nhà hàng
            });
            return result;
        } catch (error) {
            throw error;
        }
    },
    likeRestaurant: () => {
        try {
            
        } catch (error) {
            
        }
    }
}

export default likeService