const express = require("express");
const axios = require("axios");
const { Group, Student, Post, Test, Inputdb } = require("../db/models");
const fileMiddleware = require('../middleware/file');

const router = express.Router();

(async function () {
  try {
//     await Group.create({title: 'Bears'})
//     await Student.create({
//         name: 'Vlad',
//         groupId: 2,
//     });
//     const vlad = await Student.findOne({ where: { name: 'Alex' } });
//     console.log(vlad);

//     await Group.bulkCreate([
//         {title: 'Tigeg'},
//         {title: 'Dog' },
//         { title: 'Elephant' }
//     ])
    // await Test.bulkCreate([
    //   {
    //     body: "Katya ( Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium enim nisi voluptate ea, aliquam omnis obcaecati rerum unde? Iusto, et? )",
    //   },
    //   {
    //     body: "Vlad ( Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium enim nisi voluptate ea, aliquam omnis obcaecati rerum unde? Iusto, et? )",
    //   },
    //   {
    //     body: "Dasha ( Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium enim nisi voluptate ea, aliquam omnis obcaecati rerum unde? Iusto, et? )",
    //   },
    // ]);

//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/posts"
//     );
//     const posts = response.data;
//     await Post.bulkCreate(
//       posts
//         .filter((el) => el.userId <= 9)
//         .map((post) => ({ body: post.body, authorId: post.userId }))
//     );

//     const students = await Student.findAll({
//       where: { groupId: 2 },
//     });
  } catch (error) {
    console.log(error);
    }
    
})();


router.get("/getzapros", async (req, res) => {
  try {
    const data = await Inputdb.findAll();
      res.json(data)
  } catch (error) {
    console.log(error);
  }
    
});

router.post("/postzapros", fileMiddleware.array('dropPhoto', 4), async (req, res) => {
  try {
    await Inputdb.create({
      body: req.body.body,
      name: req.body.name,
      city: req.body.city,
      image: req.files.map((file) => file.originalname).join(", "), // Объединяем имена файлов через запятую
    });

    res.status(200).json({ message: "Данные успешно сохранены" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Произошла ошибка при сохранении данных" });
  }
  console.log(req.files);
});


router.delete("/postzapros/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Inputdb.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.patch("/getzapros/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    await Inputdb.update(updatedData, { where: { id } });

    const updatedRecord = await Inputdb.findByPk(id); // Получаем обновленную запись из базы данных

    console.log(updatedData);
      console.log(updatedRecord);
    res.status(200).json(updatedRecord);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Произошла ошибка при обновлении данных" });
  }
});
// -----
module.exports = router;