import { createSlice } from "@reduxjs/toolkit";
import {Order} from '../../../interfaces/interface'

interface Orders  {
    orders : Order[]
}

const initialState : Orders ={
    orders : []
}

const orderSlice = createSlice({
    name : 'orders',
    initialState,
    reducers : {
        setOrder : (state,action) =>{
            state.orders.push(action.payload);
        }
    }
});

export const {setOrder} = orderSlice.actions;

export default orderSlice.reducer;