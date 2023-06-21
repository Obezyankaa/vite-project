import { configureStore } from "@reduxjs/toolkit";
// импортируйте ваши редьюсеры здесь
import counterSlice from "./Slice/counterSlice";
import formSlice from "./Slice/formSlice";
export default configureStore({
  reducer: {
    // добавьте все ваши редьюсеры здесь
        counter: counterSlice,
        form: formSlice,
  },
});
