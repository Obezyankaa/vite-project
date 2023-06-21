const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { default: axios } = require("axios");
const testRouter = require('./routes/TestRouter');
const dbTestRouter = require('./routes/TestRouterDb');


const app = express();
const PORT = process.env.PORT || 5000;

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


app.listen(PORT, () => {
  console.log(`Старт 🏎️ 💨 ${PORT}`);
});
