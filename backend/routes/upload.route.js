const express = require("express");
const fileMiddleware = require('../middleware/file')
const router = express.Router();

router.post("/upload", fileMiddleware.single('avatar'), (req, res) => {
    try {
        if (req.file) {
            res.json(req.file)
      }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
