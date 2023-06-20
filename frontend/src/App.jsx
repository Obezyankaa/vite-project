import { useEffect, useState } from "react";
import Form from "./Form";
import DataArr from "./DataArr";


export default function App() {
  const [data, setData] = useState(null); 
  const [user, setUserData] = useState(null);


  

  useEffect(() => {
    fetchData();
    fetchDataUser();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5173/api/data"); // Замените '/api/data' на ваш маршрут на бекенде
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  }

   const fetchDataUser = async () => {
     try {
       const response = await fetch("http://localhost:5173/apidb/test"); // Замените '/api/data' на ваш маршрут на бекенде
       const jsonData = await response.json();
       setUserData(jsonData);
     } catch (error) {
       console.error("Ошибка при получении данных:", error);
     }
   };

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
      <DataArr />
    </>
  );
}
