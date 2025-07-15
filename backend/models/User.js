import mongoose from "mongoose";

const Userschema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  profilePath: {
    type: String,
  },
  points: {
    type: Number,
    default: 0,
  },
});

export const User = mongoose.model("User", Userschema);
