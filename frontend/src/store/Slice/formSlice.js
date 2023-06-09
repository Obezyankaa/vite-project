import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const formSlice = createSlice({
    name: 'forms',
    initialState: {
        forms: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchFormsStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchFormsSuccess(state, action) {
            state.loading = false;
            state.forms = action.payload;
        },
        fetchFormsFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        deleteFormSuccess(state, action) {
            const formId = action.payload;
            state.forms = state.forms.filter((el) => el.id !== formId);
        },
        deleteFormFailure(state, action) {
            state.error = action.payload;
    },
  },
});

export const {
  fetchFormsStart,
  fetchFormsSuccess,
  fetchFormsFailure,
  deleteFormSuccess,
  deleteFormFailure,
} = formSlice.actions;


export const fetchForms = (inputData, setInputData) => async (dispatch) => {
  dispatch(fetchFormsStart());
  const formData = new FormData();
    for (const key in inputData) {
      if (typeof inputData[key] === "object") {
        for (const file in inputData[key]) {
          formData.append("dropPhoto", inputData[key][file]);
        }
      } else {
        formData.append(key, inputData[key]);
      }
  }
  
  // if (inputData.dropVideo !== null) {
  //   formData.append("dropVideo", inputData.dropVideo);
  // }


  axios
    .post("http://localhost:3001/apidb/postzapros", formData) // Использование { inputData } вместо { data: inputData }
    .then(() => {
      setInputData({
        body: "",
        name: "",
        city: "",
        dropPhoto: [],
        dropVideo: null,
      });
      dispatch(getFetchForm()); // Добавлен этот вызов для получения обновленных данных после успешной отправки формы
    });
};

export const getFetchForm = () => async (dispatch) => {
    dispatch(fetchFormsStart());

    try {
        const response = await axios.get("http://localhost:3001/apidb/getzapros");
        dispatch(fetchFormsSuccess(response.data));
    } catch (error) {
        dispatch(fetchFormsFailure(error.message));
    }
}


export const deleteForm = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3001/apidb/postzapros/${id}`);
    dispatch(deleteFormSuccess(id));
  } catch (error) {
    dispatch(deleteFormFailure(error.message));
  }
};

export const updateForm =
  (formId, updatedData) => async (dispatch, getState) => {
    try {
      await axios.patch(
        `http://localhost:3001/apidb/getzapros/${formId}`,
        updatedData
      );

      const { forms } = getState().forms; // Получаем текущий список форм из состояния
      const updatedForm = [...forms]; // Spread all forms

      dispatch(fetchFormsSuccess(updatedForm)); // Передаем только обновленную форму в экшен fetchFormsSuccess
    } catch (error) {
      dispatch(fetchFormsFailure(error.message));
    }
  };
export default formSlice.reducer;