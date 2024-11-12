import FoodModel from "../models/food.model.js";
import OrderModel from "../models/order.model.js";
import UserModel from "../models/user_model.js";

const orderService = {
    orderFood: async (userId, foodId, amount) => {
        try {
          const user = await UserModel.findByPk(userId);
          if (!user) {
            return { message: "Người dùng không tồn tại." };
          }
    
          const food = await FoodModel.findByPk(foodId);
          if (!food) {
            return { message: "Món ăn không tồn tại." };
          }
    
          const newOrder = await OrderModel.create({
            user_id: userId,
            food_id: foodId,
            amount: amount, 
            order_date: new Date(),
          });
    
          return newOrder;
        } catch (error) {
          throw error;
        }
      }
}

export default orderService