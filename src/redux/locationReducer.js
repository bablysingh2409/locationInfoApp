import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  locations: [],
  loading: false,
};

const codeInfoSlice = createSlice({
  name: 'codeInfoApp',
  initialState,
  reducers: {
    toggleLoading: (state, actions) => {
      state.loading = actions.payload;
    },
    addLocation: (state, action) => {
      const data = action.payload;
      state.locations.push(data);
    },
    deleteLocation: (state, action) => {
      const { idx } = action.payload;
      state.locations.splice(idx, 1);
    },
  },
});

export const codeInfoReducer = codeInfoSlice.reducer;
export const actions = codeInfoSlice.actions;
export const codeInfoSelector = (state) => state.codeInfoReducer.locations;
export const loadingSelector = (state) => state.codeInfoReducer.loading;
