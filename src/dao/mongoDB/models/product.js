import { Schema, mongoose } from "mongoose";

const product = new Schema({

    name: String,
    description: String,
    price: Number,
    stock: Number,
    category: String,
    isAvailable: { type: Boolean, default: true },
    imgURI: { type: String, default: "no imagen" },


})

export const productModel = mongoose.model("product", product);



