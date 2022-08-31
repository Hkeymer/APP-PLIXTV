import { configureStore } from '@reduxjs/toolkit';
import contenSlice from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    contenSlice
  },
});
