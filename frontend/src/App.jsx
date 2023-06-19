import { useEffect, useState } from "react";


export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/data"); // Замените '/api/data' на ваш маршрут на бекенде
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  }

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
    </>
  );
}
