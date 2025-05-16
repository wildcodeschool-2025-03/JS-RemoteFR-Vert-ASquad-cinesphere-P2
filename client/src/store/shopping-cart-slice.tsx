import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  id: string;
  quantity: number;
};

interface ShoppingCartState {
  items: CartItem[];
  isCartVisible: boolean;
}

const initialState: ShoppingCartState = {
  items: [],
  isCartVisible: false,
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    toggleCartView(state) {
      state.isCartVisible = !state.isCartVisible;
    },

    addItemToCart(state, action: PayloadAction<{ id: string }>) {
      const newProduct = action.payload;

      const existingProductItem = state.items.find(
        (item) => item.id === newProduct.id,
      );

      if (!existingProductItem) {
        state.items.push({
          id: newProduct.id,
          quantity: 1,
        });
      } else {
        existingProductItem.quantity++;
      }
    },

    removeItemFromCart(state, action: PayloadAction<string>) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const shoppingCartActions = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
