import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./commentSlice.js";
// creating a store for the application to store diff slices
const store = configureStore({
  reducer: {
    comment: commentReducer,
  },
});
export default store;