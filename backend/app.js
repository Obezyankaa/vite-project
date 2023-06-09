const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { default: axios } = require("axios");
const apiRouter = express.Router(); // Создаем роутер для API


const app = express();
const PORT = 3000;

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

apiRouter.get("/data", (req, res) => {
  // Исправляем маршрут без "/api"
  const data = [
    { id: 1, name: "Элемент 1" },
    { id: 2, name: "Элемент 2" },
    { id: 3, name: "Элемент 3" },
  ];
  res.json(data);
});

app.use("/api", apiRouter); // Используем базовый путь "/api" для маршрутов API

app.listen(PORT, () => {
  console.log(`Старт 🏎️ 💨 ${PORT}`);
});
