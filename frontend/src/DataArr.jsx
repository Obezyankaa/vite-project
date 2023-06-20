import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function DataArr() {
    const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
console.log(data);
    return (
        <div>
            <div>данные </div>
            {data && data.map((el) => (
                <li key={el.id}>
                    <span>{el.name}</span>
                </li>
            ))}
        </div>
  );
};
