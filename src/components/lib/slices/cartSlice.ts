import { Cart } from '@/interfaces/interface';
import { createSlice } from '@reduxjs/toolkit';

interface CartState {
  carts: Cart[];
}

const initialState: CartState = {
  carts: []
};

const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    setCarts : (state, action) => {
        const newId = action.payload.id;
      const isExist = state.carts.find(cart => cart.id === Number(newId));

      if(!isExist){
          state.carts.push(action.payload);
          return;
      }
      state.carts = state.carts.map((cart)=>{
        if(cart.id === Number(newId)){
            return {
                ...cart, 
                 quantity : cart.quantity + 1
            }
        }
        return cart;
      })
    },
    setRemoveCart : (state,action) => {
        const filterData = state.carts.filter(cart => cart.id !== Number(action.payload))
        state.carts = filterData;
    },
    setDeleteCart : (state,action) => {
        state.carts = []
    }
  },
});

export const { setCarts,setRemoveCart,setDeleteCart } = cartSlice.actions;
export default cartSlice.reducer;
