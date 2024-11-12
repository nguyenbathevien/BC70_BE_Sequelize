import RateResModel from "../models/rateRes.model.js"
import RestaurantModel from "../models/restaurant.model.js"
import UserModel from "../models/user_model.js"


const evaluteService = {
    addUserEvaluteRestaurant: async(userId,resId,amount) => {
        try {
            const existUser = await RateResModel.findOne({
                where: {user_id: userId,res_id: resId }
            })
            if(existUser){
                return {message: `User đã đánh giá nhà hàng này rồi`}
            }
            const newEvalute = await RateResModel.create({
                user_id: userId,
                res_id: resId,
                amount: amount,  
                date_rate: new Date()
            })
            return newEvalute
        } catch (error) {
            throw error
        }
    },
    evaluteUser: async(userId) => {
        try {
            
            const result = await RateResModel.findAll({
                where: { user_id: Number(userId) },
                include: [{ model: RestaurantModel, as: 'restaurant' }]
            });
            console.log(result)
            return result;
        } catch (error) {
            throw error;
        }
    },
    evaluteRestaurant: async(resID) => {
        try {
            const result = await RateResModel.findAll({
                where: {
                    res_id: Number(resID)
                },
                include:[{model: UserModel,  as: 'user'}]
            })
            return result
        } catch (error) {
            throw error
        }
    }
}

export default evaluteService