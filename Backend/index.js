import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./Config/databaseConnect.js";
import foodRouter from "./Routes/foodRoute.js";
import userRouter from "./Routes/userRoute.js";
import cookieParser from "cookie-parser";
import cartRouter from "./Routes/cartRoute.js";

dotenv.config();

const app = express();

app.use(express.json());

const allowedOrigins = ["http://localhost:5173", "http://localhost:5174","http://localhost:5175"];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);
app.use(cookieParser());

const port = process.env.PORT || 8000;
// app.get("/", (req, res) => {
//   res.send("Hi I am Prakhar Joshi!");
// });

const startServer = async () => {
  await connectDB();
  app.use("/api/food",  foodRouter);
  app.use("/api/user", userRouter);
  app.use("/api/cart", cartRouter);
  app.listen(port, () => {
    console.log(`Server Listening on this PORT: ${port}`);
  });
};
startServer();
