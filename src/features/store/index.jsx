import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../authentication/authSlice"
export const Store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
