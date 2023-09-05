import { configureStore } from '@reduxjs/toolkit';
import detailReducers from './detail/detailSlice';

const store = configureStore({
  reducer: {
    detail: detailReducers,
  },
});

export default store;
