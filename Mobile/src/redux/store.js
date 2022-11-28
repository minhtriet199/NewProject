import { configureStore } from "@reduxjs/toolkit";
import Auth from './Auth';
import { cartReducer } from './Cart';

export default configureStore({
    reducer:{
        Auth:Auth,
        Cart: cartReducer,
    }
})