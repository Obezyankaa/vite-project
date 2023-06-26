const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { default: axios } = require("axios");
const path = require('path')
const uploadRouter = require('./routes/upload.route');
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
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static(path.join(__dirname, "images")));


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", uploadRouter); 
app.use("/apidb", dbTestRouter);


app.listen(PORT, () => {
  console.log(`Старт 🏎️ 💨 ${PORT}`);
});
