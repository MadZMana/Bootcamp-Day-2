import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./src/routes/authRoutes.js";
import productRoutes from "./src/routes/productRoutes.js";
import { connectDB } from "./src/config/db.js";

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Bootcamp Day 2");
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
