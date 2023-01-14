const express = require("express");
const app = express();
const taskRoute = require("./routers/tasks");

const PORT = 3000;

//ルーティングの処理
app.use("/api/v1/tasks", taskRoute);

app.listen(PORT, console.log("Nodeサーバー起動"));
