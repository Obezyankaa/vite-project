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

  //   const sendFile = useCallback(async () => {
  //     try {
  //       const data = new FormData();
  //       data.append("avatar", img);

  //       await axios
  //         .post("http://localhost:3001/api/upload", data, {
  //           headers: {
  //             "content-type": "mulpipart/form-data",
  //           },
  //         })

  //         .then((res) => setAvatar(res.data.path));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }, [img]);
  // console.log(avatar);
  console.log(inputData);
  
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
