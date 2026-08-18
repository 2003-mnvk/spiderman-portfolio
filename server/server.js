import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

/* ========================= */
/* MIDDLEWARE */
/* ========================= */

app.use(cors());

app.use(express.json());

/* ========================= */
/* DATABASE */
/* ========================= */

connectDB();

/* ========================= */
/* ROUTES */
/* ========================= */

app.get("/", (req, res) => {
  res.json({
    message: "Web-Slinger API is running 🕷️",
  });
});

app.use("/api/contact", contactRoutes);

/* ========================= */
/* SERVER */
/* ========================= */

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});