import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./Config/databaseConnect";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

connectDB();

const port = process.env.PORT || 8000;
app.get("/", (req, res) => {
  res.send("Hi I am Prakhar Joshi!");
});

app.listen(port, () => {
  console.log(`Server Listening on this PORT: ${port}`);
});
