import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchForms } from "./store/Slice/formSlice";

export default function Form() {
  const dispatch = useDispatch();
   const [inputData, setInputData] = useState({
      body:'', name:'', city:'', dropPhoto: [],
  });
    
     const changeHandler = (event) => {
       if (event.target.files) {
         setInputData((prev) => ({
           ...prev,
           dropPhoto: event.target.files,
         }));
       } else {
         setInputData((prev) => ({
           ...prev,
           [event.target.name]: event.target.value,
         }));
       }
     };

  const submitHendler = async (e) => {
    e.preventDefault();
    dispatch(fetchForms(inputData, setInputData));
  };

  return (
    <div>
      <form onSubmit={submitHendler}>
        <input
          type="text"
          name="body"
          value={inputData.body}
          onChange={changeHandler}
          placeholder="body"
        />
        <input
          type="text"
          name="name"
          value={inputData.name}
          onChange={changeHandler}
          placeholder="name"
        />
        <input
          type="text"
          name="city"
          value={inputData.city}
          onChange={changeHandler}
          placeholder="city"
        />
        <input
          type="file"
          name="image"
          value={inputData?.dropPhoto?.name}
          onChange={changeHandler}
          multiple // добавь этот атрибут
        />
        <button type="submit">опубликовать</button>
      </form>
    </div>
  );
}


//   authorId: {
//         type: Sequelize.INTEGER,
//         references: {
//           model: "Students",
//           key: "id",
//         },
// },
  

  // static associate({ Student }) {
  //     // define association here
  //     this.belongsTo(Student, { foreignKey: "authorId" });
  //   }

  // npx sequelize-cli model:generate --name inputdb --attributes body:text,name:string,city:string,authorid:integer,image:string,video:blob;