import { useEffect, useState } from "react";
import Form from "./Form";
import DataArr from "./DataArr";


export default function App() {
const [data, setData] = useState(null);
const [user, setUserData] = useState(null);

useEffect(() => {
  fetch("http://localhost:3001/api/data")
    .then((response) => response.json())
    .then((jsonData) => setData(jsonData))
    .catch((error) => console.error("Ошибка при получении данных:", error));

  fetch("http://localhost:3001/apidb/getzapros")
    .then((response) => response.json())
    .then((jsonData) => setUserData(jsonData))
    .catch((error) => console.error("Ошибка при получении данных:", error));
}, []);

  console.log(user);
  return (
    <>
      <h1>App</h1>
      <div>
        {data ? (
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        ) : (
          <p>Загрузка данных...</p>
        )}
      </div>
      <h2>user</h2>
      <div>
        {user && user.map((el) => (
          <li key={el.id}>{el.body}</li>
          ))}
      </div>

      <Form />
      {/* <DataArr /> */}
    </>
  );
}
