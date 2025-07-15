import express from "express";
import { User } from "../models/User.js";

const router = express.Router();

router.post("/user", async (req, res) => {
  const { userId } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ userId });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Create new user
    const user = new User({ userId });
    await user.save();

    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.post("/generatepoints", async (req, res) => {
  const { userId } = req.body;

  try {
    const user = await User.findOne({ userId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // if (user.points > 0) {
    //   return res.status(400).json({
    //     message: "user Points already generated",
    //   });
    // }
    const pointsToAdd = Math.floor(Math.random() * 10 + 1);
    user.points = (user.points || 0) + pointsToAdd;
    await user.save();

    res.status(200).json({ message: "Pointsgenerated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.get("/leaderboard", async (req, res) => {
  try {
    const users = await User.find().sort({ points: -1 });

    res.status(200).json({
      message: "Leaderboard fetched successfully",
      users: users.map((user) => ({
        userId: user.userId,
        points: user.points || 0,
      })),
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;
