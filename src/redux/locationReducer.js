import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const codeInfoSlice = createSlice({
  name: 'codeInfoApp',
  initialState,
  reducers: {
    addLocation: (state, action) => {
      const { code, country, state, placeName } = action.payload;
      initialState.push({ code, country, state, placeName });
    },
  },
});

export const codeInfoReducer = codeInfoSlice.reducer;
export const actions = codeInfoSlice.actions;
export const codeInfoSelector = (state) => state.codeInfoReducer.initialState;
