import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import UserRoutes from "./routes/User.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/user", UserRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});


app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello ",
  });
});

const PORT = process.env.PORT || 5000;

const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGODB_URI, {})
    .then(() => {
      console.log("Database connected successfully.");
    })
    .catch((err) => {
      console.error("Database connection error:", err);
    });
};

const startServer = async () => {
  try {
    connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
