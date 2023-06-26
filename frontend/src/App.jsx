import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
import { getFetchForm, deleteForm, updateForm } from "./store/Slice/formSlice";
import axios from "axios";

import logo from './tanisha.png'

export default function App() {
  const dispatch = useDispatch();
  const forms = useSelector((state) => state.forms.forms);
  const [img, setImg] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const [editingPost, setEditingPost] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    body: "",
    name: "",
    city: "",
  });

  useEffect(() => {
    dispatch(getFetchForm());
  }, [dispatch]);

  const handleFormDelete = (formId) => {
    dispatch(deleteForm(formId));
  };

  const handleFormUpdate = async (formId, updatedData) => {
    try {
      await dispatch(updateForm(formId, updatedData));
      dispatch(getFetchForm()); // Получаем обновленные данные после успешного обновления
    } catch (error) {
      console.log(error);
    }
    setEditingPost(null);
  };

  const sendFile = useCallback( async () => {
    try {
      const data = new FormData()
      data.append('avatar', img)
      
      await axios
        .post("http://localhost:3001/api/upload", data, {
          headers: {
            "content-type": "mulpipart/form-data",
          },
        })

        .then((res) => setAvatar(res.data.path));
    } catch (error) {
      console.log(error);
    }
  }, [img])
  console.log(avatar);
  return (
    <section>
      <h1>^_^</h1>
      <Form />
      <h3>значения из базы данных табличка Inputdb</h3>

      <div>
        {forms &&
          forms.map((el) => (
            <li key={el.id}>
              <div>значение body ({el.body})</div>
              <div>значение name ({el.name})</div>
              <div>значение city ({el.city})</div>
              {editingPost === el.id ? (
                <div>
                  <input
                    type="text"
                    name="body"
                    value={updatedData.body}
                    onChange={(e) =>
                      setUpdatedData((prevData) => ({
                        ...prevData,
                        body: e.target.value,
                      }))
                    }
                  />
                  <input
                    type="text"
                    name="name"
                    value={updatedData.name}
                    onChange={(e) =>
                      setUpdatedData((prevData) => ({
                        ...prevData,
                        name: e.target.value,
                      }))
                    }
                  />
                  <input
                    type="text"
                    name="city"
                    value={updatedData.city}
                    onChange={(e) =>
                      setUpdatedData((prevData) => ({
                        ...prevData,
                        city: e.target.value,
                      }))
                    }
                  />
                  <button
                    style={{ marginLeft: "1rem" }}
                    onClick={() => handleFormUpdate(el.id, updatedData)}
                  >
                    сохранить
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    style={{ marginLeft: "1rem" }}
                    onClick={() => handleFormDelete(el.id)}
                  >
                    удалить
                  </button>
                  <button
                    style={{ marginLeft: "1rem" }}
                    onClick={() => {
                      setEditingPost(el.id);
                      setUpdatedData({
                        body: el.body,
                        name: el.name,
                        city: el.city,
                      });
                    }}
                  >
                    изменить
                  </button>
                </div>
              )}
            </li>
          ))}
      </div>
      <div>
        {avatar ? (
          <img src={`http://localhost:3001/${avatar}`} alt="avatar" />
        ) : (
          <img src={`${logo}`} alt="logo" />
        )}
      </div>
      <input type="file" onChange={(e) => setImg(e.target.files[0])} />
      <button onClick={sendFile}>созранить</button>
    </section>
  );
}
