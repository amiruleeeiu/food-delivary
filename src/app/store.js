import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../app/shopping-cart/cart-slice';
import authSlice from './auth-slice/auth-slice';
import cartUISlice from './shopping-cart/cart-ui-slice';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartVisible:cartUISlice.reducer,
    auth:authSlice.reducer,
  },
});
