import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateForm } from "./store/Slice/formSlice";

export default UpdateFormContainer = () => {
  const dispatch = useDispatch();
  const [body, setBody] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "body") {
      setBody(value);
    } else if (name === "name") {
      setName(value);
    } else if (name === "city") {
      setCity(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateForm(formId, { body, name, city }));
    setBody("");
    setName("");
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Body:
        <input
          type="text"
          name="body"
          value={body}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        City:
        <input
          type="text"
          name="city"
          value={city}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Обновить</button>
    </form>
  );
};
