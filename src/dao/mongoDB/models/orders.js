import { mongoose, Schema } from "mongoose";
import { orderCodeGenerator } from "../../../util/orderCodeGenerator.js"

const orderSchema = new Schema({

    code: { type: String, default: orderCodeGenerator },
    purchase_datetime: { type: Number, default: Date.now },
    amount: Number,
    purchaser: String,
    bought: []
})

export const orderModel = mongoose.model("order", orderSchema);