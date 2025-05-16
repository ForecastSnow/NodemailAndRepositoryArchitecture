import { Schema, mongoose } from "mongoose";

const user = new Schema({

    first_name: String,
    last_name: String,
    email: { type: String, unique: true },
    password: String,
    age: Number,
    cart: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: "product", default: null },
        quantity: { type: Number, default: 1 },
        _id: false
    }],
    role: { type: String, default: "user" }
})

export const userModel = mongoose.model("User", user);