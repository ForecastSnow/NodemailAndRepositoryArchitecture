import { mongoose, Schema } from "mongoose";

const passwordResetOrdersSchema = new Schema({

    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    datetime: { type: Number, default: Date.now },
    used: { type: Boolean, default: false },
    token: String
})

export const passwordResetOrdersModel = mongoose.model("passwordResetOrder", passwordResetOrdersSchema);