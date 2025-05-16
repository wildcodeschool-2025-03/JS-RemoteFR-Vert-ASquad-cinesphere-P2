import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "./shopping-cart-slice";

const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
