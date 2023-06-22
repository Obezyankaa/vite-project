const express = require("express");
const axios = require("axios");
const { Group, Student, Post, Test, Inputdb } = require("../db/models");

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
    const data = await Test.findAll();
      res.json(data)
  } catch (error) {
    console.log(error);
  }
    
});

router.post("/postzapros", async (req, res) => {
  try {
    const { body, name, city } = req.body.inputData;
      
    await Inputdb.create({ body, name, city });

    console.log(req.body.inputData, "<--- вот эта консоль");

    res.status(200).json({ message: "Данные успешно сохранены" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Произошла ошибка при сохранении данных" });
  }
});

module.exports = router;