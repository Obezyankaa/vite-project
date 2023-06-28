import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchForms } from "./store/Slice/formSlice";

export default function Form() {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState({
    body: "",
    name: "",
    city: "",
    dropPhoto: [],
    dropVideo: null, // Новое поле для загрузки видео
  });

  const changeHandler = (event) => {
    if (event.target.files) {
      if (event.target.name === "dropPhoto") {
        setInputData((prev) => ({
          ...prev,
          dropPhoto: event.target.files,
        }));
      } else if (event.target.name === "dropVideo") {
        setInputData((prev) => ({
          ...prev,
          dropVideo: event.target.files[0],
        }));
      }
    } else {
      setInputData((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(fetchForms(inputData, setInputData));
  };
console.log(inputData);
  return (
    <div>
      <form onSubmit={submitHandler}>
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
        <label>
          Загрузить фото
          <input
            type="file"
            name="dropPhoto"
            onChange={changeHandler}
            multiple
          />
        </label>

        {/* <label>
          Загрузить видео
          <input
            type="file"
            name="dropVideo"
            onChange={changeHandler}
            accept="video/mp4, video/quicktime, video/webm, video/ogg, video/3gpp, video/x-msvideo"
          />
        </label> */}
        <button type="submit">опубликовать</button>
      </form>
    </div>
  );
}
