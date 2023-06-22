import { useEffect, useState } from "react";
import Form from "./Form";
import DataArr from "./DataArr";
import { useDispatch, useSelector } from "react-redux";
import { getFetchForm } from "./store/Slice/formSlice";


export default function App() {
  const dispatch = useDispatch();
  const forms = useSelector((state) => state.forms.forms);

useEffect(() => {
  dispatch(getFetchForm());
}, [dispatch]);
console.log(forms);
  // console.log(user);
  return (
    <section>
      <h1>^_^</h1>
      <Form />
      <h3>значения из базы данных табличка Inputdb</h3>
      <div>
        {forms &&
          forms.map((el) => (
            <li key={el.id}>
              <div>значение body ( {el.body} )</div>
              <div>значение name ( {el.name} )</div>
              <div>значение city ( {el.city} )</div>
              <button style={{ marginLeft: "1rem" }}>удалить</button>
              <button style={{ marginLeft: "1rem" }}>изменить</button>
            </li>
          ))}
      </div>

      {/* <DataArr /> */}
    </section>
  );
}
