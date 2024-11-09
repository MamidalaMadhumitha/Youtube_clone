import { createSlice } from "@reduxjs/toolkit";


const commentSlice = createSlice({
  name: "comment",
  initialState: {
    items: [],
  },
  // defining reducers (actions) to perform an operation
  reducers: {
    // adding an item
    editItem: (state, action) => {
      let item = state.items.find((item) => item._id == action.payload._id);
      const data = { ...action.payload, quantity: 1 };
      if (!item) {
        state.items.push(data);
      } else {
        item.quantity++;
      }
    },
    // removing an item
    removeItem: (state, action) => {
    
        const arr = state.items.filter((item) => item._id != action.payload._id);
        state.items = arr;
 
    },
  },
});
export const { editItem, removeItem } = commentSlice.actions;
export default commentSlice.reducer;