import React, { useState } from "react";
import axios from "axios";

export default function Form() {
  const [inputData, setInputData] = useState("");

  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3001/apidb/postzapros", { inputData });

      // Данные успешно сохранены
      // Добавьте здесь код для обработки успешного сохранения данных,
      // например, очистка формы или отображение уведомления об успешном сохранении.
      // Очищаем поле ввода
      setInputData("");
    } catch (error) {
      console.log(error);
      // Произошла ошибка при сохранении данных
      // Добавьте здесь код для обработки ошибки сохранения данных,
      // например, отображение сообщения об ошибке или логирование ошибки.
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={inputData} onChange={handleChange} />
        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
}
