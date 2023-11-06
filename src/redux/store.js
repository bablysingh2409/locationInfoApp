import { configureStore } from '@reduxjs/toolkit';
import { codeInfoReducer } from './locationReducer';

export const store = configureStore({
  reducer: { codeInfoReducer },
});
