const { Schema, default: mongoose, model } = require("mongoose");

const finalorderSchema = Schema(
    {
        user_id:{
            type:mongoose.Types.ObjectId,
            ref:"User",
        },
        product_id:{
            type: mongoose.Types.ObjectId,
            ref:"Product", 
        }
        
    }
)

const Order = model("Order",finalorderSchema);
module.exports = Order;