import mongoose from "mongoose";

export function connectDB() {

    try {

        mongoose.connect(process.env.MONGO_URI).then(() => console.log("Connected with atlasDB"))

    } catch (error) {
        console.log("error to connect witch atlasDB " + error)
    }

}
