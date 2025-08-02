import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
import cartsReducer from './slices/cartSlice';
import ordersReducer from './slices/orderSlice';

export const store = configureStore({
  reducer: {
    products : productsReducer,
    carts : cartsReducer,
    orders : ordersReducer
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
