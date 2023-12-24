import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../authentication/authSlice"
import studentReducer from "../student/studentSlice";
export const Store = configureStore({
  reducer: {
    auth: authReducer,
    student: studentReducer
  },
});
