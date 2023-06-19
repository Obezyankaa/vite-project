const { Group, Student, Post } = require("../db/models");

(async function () {
    try {
        // await Group.create({title: 'Bears'})
        // await Student.create({
        //     name: 'Vlad',
        //     groupId: 2,
        // });
        const vlad = await Student.findOne({ where: { name: 'Alex' } });
        console.log(vlad);
    } catch (error) {
        console.log(error);
    }
})();