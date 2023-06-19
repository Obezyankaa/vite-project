const express = require("express");
const axios = require("axios");
const { Group, Student, Post } = require("../db/models");

const router = express.Router();

// (async function () {
//   try {
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
//     await Student.bulkCreate([
//       { name: "Katya", groupId: 1 },
//       { name: "Vlad", groupId: 1 },
//       { name: "Dasha", groupId: 1 },
//       { name: "Lera", groupId: 2 },
//       { name: "Liza", groupId: 2 },
//       { name: "Andrey", groupId: 3 },
//       { name: "Alex", groupId: 3 },
//       { name: "Bob", groupId: 3 },
//     ]);

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
//   } catch (error) {
//     console.log(error);
//     }
    
// })();


router.get("/test", async (req, res) => {
  try {
    const students = await Student.findAll();
      res.json(students)
  } catch (error) {
    console.log(error);
  }
    
});

module.exports = router;