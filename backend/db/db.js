import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.DATABASE_URL); // connect to MongoDb
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
