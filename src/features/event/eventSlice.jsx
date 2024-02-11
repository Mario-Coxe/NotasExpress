import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {API_URL} from "../../../application.properties";
import axios from "axios";

const initialState = {
  message: null,
  events: null,
  isloading: false,
};

export const fetchEventByTeamId = createAsyncThunk(
  "events/fetchEventByTeamId",
  async ({ team_id}) => {
    try {
      const response = await axios.get(`${API_URL}events/${team_id}`);
      //console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Erro:", error);
      throw error;
    }
  }
);


const findEventsByTeamSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEventByTeamId.pending, (state) => {
        state.isloading = true;
      })
      .addCase(
        fetchEventByTeamId.fulfilled,
        (state, { payload: { message, events } }) => {
          state.isloading = false;
          if (message) {
            state.message = message;
            state.events = events;
            console.warn(state.message);
          } else {
            state.events = events;
            console.warn("sucesso!");
          }
        }
      )
      .addCase(fetchEventByTeamId.rejected, (state) => {
        //console.error("Erro na ação fetchStudentByTeamIdAndTelefone:", action.error);
        state.isloading = true;
      });
  },
});


export const searchEventByTeamId = createAsyncThunk(
  "eventsSearch/searchEventByTeamId",
  async ({ team_id, searchValue = null }) => { 
    try {
      const response = await axios.get(`${API_URL}events/search/${team_id}/${searchValue}`);
      return response.data;
    } catch (error) {
      console.error("Erro:", error);
      throw error;
    }
  }
);



const findEventsBySearchSlice = createSlice({
  name: "eventsSearch",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchEventByTeamId.pending, (state) => {
        state.isloading = true;
      })
      .addCase(
        searchEventByTeamId.fulfilled,
        (state, { payload: { message, events } }) => {
          state.isloading = false;
          if (message) {
            state.message = message;
            state.events = events;
            console.warn(state.message);
          } else {
            state.events = events;
            console.warn("sucesso!");
          }
        }
      )
      .addCase(searchEventByTeamId.rejected, (state) => {
        //console.error("Erro na ação fetchStudentByTeamIdAndTelefone:", action.error);
        state.isloading = true;
      });
  },
});

export const findEventsByTeamReducer = findEventsByTeamSlice.reducer;
export const findEventsBySearchReducer = findEventsBySearchSlice.reducer;