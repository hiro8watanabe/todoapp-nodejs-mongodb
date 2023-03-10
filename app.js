const express = require("express");
const app = express();
const taskRoute = require("./routers/tasks");
const connectDB = require("./db/connect");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
app.use(express.json());
mongoose.set("strictQuery", false);

const PORT = 3000;

//ルーティングの処理
app.use("/api/v1/tasks", taskRoute);

//データベースと接続
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, console.log("Nodeサーバー起動(￣∀￣)キターーーーーーーーーー!!!"));
  } catch (err) {
    console.log(err);
  }
};

start();
