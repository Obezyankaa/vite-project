import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementDepartment: (state) => {
      state.count += 1;
    },
    incrementGap: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
    // incrementScient: (state) => {
    //   if (state.countScient < 50) {
    //     state.countScient += 2;
    //   }
    // },
    // incrementScienceDegree: (state) => {
    //   if (state.countScienceDegree < 30) {
    //     state.countScienceDegree += 2;
    //   }
    // },
  },
});

export const {
  incrementDepartment,
  incrementGap,
  incrementScient,
  incrementScienceDegree,
} = counterSlice.actions;

export default counterSlice.reducer;
