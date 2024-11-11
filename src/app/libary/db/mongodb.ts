



import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();




const MONGODB_URI = process.env.MONGODB_URI || "";
if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in environment variables.");
}
const connect = async () => {
    try {
        await mongoose.connect(MONGODB_URI)
        console.log(MONGODB_URI);
        console.log("Mongodb connection successfull!");
    } catch (error) {
        throw new Error("Error in connecting to mongoDB." + error);
    }
};

export default connect;