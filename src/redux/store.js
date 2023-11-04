import { codeInfoReducer } from './locationReducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: codeInfoReducer,
});
