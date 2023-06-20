const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { default: axios } = require("axios");
const testRouter = require('./routes/TestRouter');
const dbTestRouter = require('./routes/TestRouterDb');


const app = express();
const PORT = process.env.PORT || 3001;

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

app.use("/api", testRouter); 
app.use("/apidb", dbTestRouter);

app.post("/api/save-data", async (req, res) => {
  try {
    const { inputData } = req.body;
    
    console.log(inputData);
    // Ваш код для сохранения данных в базу данных
    // Используйте соответствующую модель и методы ORM, чтобы сохранить данные в базу данных.

    res.status(200).json({ message: "Данные успешно сохранены" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Произошла ошибка при сохранении данных" });
  }
});

app.listen(PORT, () => {
  console.log(`Старт 🏎️ 💨 ${PORT}`);
});
