import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './countSlice'

export default configureStore({
    reducer: {
        counter: counterReducer
    }
})