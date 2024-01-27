import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../authentication/authSlice"
import studentReducer from "../student/studentSlice";
import eventsReducer from "../event/eventSlice";

export const Store = configureStore({
  reducer: {
    auth: authReducer,
    student: studentReducer,
    events: eventsReducer
  },
});
