import express from "express";
import userRouter from "./routes/user.router.js";
import cors from "cors";
import  dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT||3001;


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/api/user", userRouter);

app.listen(3001, (req, res) => {
  console.log("The server is listening on port http://localhost:3001");
});
