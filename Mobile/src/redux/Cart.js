import { createSlice } from "@reduxjs/toolkit"

const Cart = createSlice({
    name:'Cart',
    initialState:{
      Carts: [],
    },
    reducers:{
      addToCart:(state,action)=>{
        const check= state.Carts.find((item)=>item.id === action.payload.id);
        if(check){
          check.quantity+=action.payload.Quantity;
        }else{
          let cart ={
            id:action.payload.id,
            quantity:action.payload.Quantity,
          }
          state.Carts.push(cart);
        }
      },
      increaseQuantity:(state,action)=>{
        const check= state.Carts.find((item)=>item.id === action.payload.id);
        check.quantity++;
        return{
          ...state
        }
  
      },
      decreaseQuantity:(state,action)=>{
        const check= state.Carts.find((item)=>item.id === action.payload.id);
        if(check.quantity ==1) check.quantity = 1;
        else check.quantity--;
        return{
          ...state
        }
      },
      removeItem:(state,action)=>{
        const check= state.Carts.find((item)=>item.id === action.payload.id);
        state.Carts = removeItem;
      }
    }
});

export const cartReducer = Cart.reducer;
export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem
} = Cart.actions;