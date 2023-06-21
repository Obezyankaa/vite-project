import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const formSlice = createSlice({
    name: 'forms',
    initialState: {
        focus: [],
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
            state.focus = action.payload;
        },
        fetchFormsFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchFormsStart, fetchFormsSuccess, fetchFormsFailure
} = formSlice.actions;


export const fetchForms = (e, inputData, setInputData) => async (dispatch) => {
     e.preventDefault();
     dispatch(fetchFormsStart());
    const formData = new FormData();
    
    axios.post("http://localhost:3001/apidb/postzapros", formData)
        .then(() => {
            setInputData({
              body: "",
              name: "",
              city: "",
            });
        })
};

export default formSlice.reducer;