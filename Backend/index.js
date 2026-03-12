import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./Config/databaseConnect.js";
import foodRouter from "./Routes/foodRoute.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

const port = process.env.PORT || 8000;
app.get("/", (req, res) => {
  res.send("Hi I am Prakhar Joshi!");
});

const startServer = async () => {
  await connectDB();

  app.use("/api/food", foodRouter);

  app.listen(port, () => {
    console.log(`Server Listening on this PORT: ${port}`);
  });
};
startServer();
