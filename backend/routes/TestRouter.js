const express = require("express");


const router = express.Router();

router.get("/data", async (req, res) => {
  // Исправляем маршрут без "/api"
  const data = [
    { id: 1, name: "Элемент 1" },
    { id: 2, name: "Элемент 2" },
    { id: 3, name: "Элемент 3" },
    { id: 4, name: "Элемент 4" },
    { id: 5, name: "Элемент 5" },
  ];
  res.json(data);
});

module.exports = router;