import { Product } from '@/interfaces/interface';
import { createSlice } from '@reduxjs/toolkit';

interface ProductState {
  carts: Product[];
}

const initialState: ProductState = {
  carts: [],
};

const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    setCarts : (state, action) => {
      state.carts.push(action.payload);
    },
    setRemoveCart : (state,action) => {
        const filterData = state.carts.filter(cart => cart.id !== Number(action.payload))
        state.carts = filterData;
    }
  },
});

export const { setCarts,setRemoveCart } = cartSlice.actions;
export default cartSlice.reducer;
