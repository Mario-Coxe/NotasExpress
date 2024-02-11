import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../authentication/authSlice"
import studentReducer from "../student/studentSlice";
import {findEventsByTeamReducer, findEventsBySearchReducer} from "../event/eventSlice";

export const Store = configureStore({
  reducer: {
    auth: authReducer,
    student: studentReducer,
    events: findEventsByTeamReducer,
    eventsSearch: findEventsBySearchReducer
  },
});
