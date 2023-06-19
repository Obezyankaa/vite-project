const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { default: axios } = require("axios");
const testRouter = require('./routes/TestRouter');



const app = express();
const PORT = 3001;

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

app.listen(PORT, () => {
  console.log(`Старт 🏎️ 💨 ${PORT}`);
});
