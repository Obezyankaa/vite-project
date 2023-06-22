import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchForms } from "./store/Slice/formSlice";

export default function Form() {
    const dispatch = useDispatch();
    const [inputData, setInputData] = useState({
      body:'', name:'', city:'',
  });
    
    const handleChange = (event) => {
      const { name, value } = event.target;
      setInputData((prevReviewData) => ({
        ...prevReviewData,
        [name]: value,
      }));
    };

  const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch(fetchForms(inputData, setInputData));

    // try {
    //   await axios.post("http://localhost:3001/apidb/postzapros", { inputData });
    //     setInputData({
    //       body: "",
    //       name: "",
    //       city: "",
    //     });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="body"
          value={inputData.body}
          onChange={handleChange}
          placeholder="body"
        />
        <input
          type="text"
          name="name"
          value={inputData.name}
          onChange={handleChange}
          placeholder="name"
        />
        <input
          type="text"
          name="city"
          value={inputData.city}
          onChange={handleChange}
          placeholder="city"
        />
        <button type="submit">опубликовать</button>
      </form>
    </div>
  );
}
