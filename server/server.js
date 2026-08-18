import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

/* ========================= */
/* CORS */
/* ========================= */

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

/* ========================= */
/* MIDDLEWARE */
/* ========================= */

app.use(express.json());

/* ========================= */
/* DATABASE */
/* ========================= */

connectDB();

/* ========================= */
/* HEALTH CHECK */
/* ========================= */

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Web-Slinger API is running 🕷️",
  });
});

/* ========================= */
/* CONTACT ROUTES */
/* ========================= */

app.use("/api/contact", contactRoutes);

/* ========================= */
/* SERVER */
/* ========================= */

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});