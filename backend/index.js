import express from "express";
import fileroutes from "./routes/fileroutes.js";
import connectDB from "./db/db.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello, world");
});

app.use("/api", fileroutes);

app.listen(3000, () => {
  connectDB();
  console.log("server is running on 3000");
});
