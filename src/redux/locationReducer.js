import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  locations: [],
};

const codeInfoSlice = createSlice({
  name: 'codeInfoApp',
  initialState,
  reducers: {
    addLocation: (state, action) => {
      const data = action.payload;
      state.locations.push(data);
    },
  },
});

export const codeInfoReducer = codeInfoSlice.reducer;
export const actions = codeInfoSlice.actions;
export const codeInfoSelector = (state) => state.codeInfoReducer.locations;
