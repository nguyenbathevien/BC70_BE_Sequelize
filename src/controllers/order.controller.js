import { responseSuccess } from "../common/helpers/response.helper.js";
import FoodModel from "../models/food.model.js";
import UserModel from "../models/user_model.js";
import orderService from "../services/order.service.js";

const orderController = {
    orderFood: async (req, res, next) => {
        try {
          const { userId, foodId, amount } = req.body;
          const user = await UserModel.findByPk(userId);

          if (!user) {
              return res.status(404).json({
                  message: "Người dùng không tồn tại."
              });
          }
          const food = await FoodModel.findByPk(foodId);
            if (!food) {
                return res.status(404).json({
                    message: "Món ăn không tồn tại."
                });
            }
          const result = await orderService.orderFood(userId, foodId, amount);
    
          if (result.message) {
            const resData = responseSuccess(result, result.message);
            return res.status(resData.code).json(resData);
          }
    
          const resData = responseSuccess(result, `User ${user.full_name} đã đặt món ${food.food_name} thành công`);
          res.status(resData.code).json(resData);
        } catch (error) {
          next(error);
        }
      }
}

export default orderController