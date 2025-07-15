import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb://localhost:27017/taskmate"
    );
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
