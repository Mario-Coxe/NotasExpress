import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API_URL from "../../../application.properties";
import axios from "axios";

const initialState = {
  message: null,
  user: null,
  token: "",
  isloading: false,
};

export const login = createAsyncThunk("login", async (data) => {
  try {
    const response = await axios.post(API_URL + "auth/login", data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.error("Credenciais incorretas.");
      //console.log("dados: ", data);
    } else {
      console.error("Erro:", error);
    }
    throw error;
  }
});

/*

export const register = createAsyncThunk("register", async (data) => {
  try {
    const response = await axios.post(API_URL + "api/v1/register", data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 422) {
      console.error("Erro 422 - Solicitação inválida:", error.response.data);
      console.error("Erro ao criar o usuário: Preencha todos os campos");
    } else {
      // Outro tipo de erro
      console.error("Erro:", error);
    }
  }

  /*
  const response = await fetch(API_URL + "api/v1/register", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  });

  const resp = await response.json();
  console.log(resp);
  return resp;
});

/*

export const updateUser = createAsyncThunk("updateUser", async (data) => {
  
  console.log(data.id);
  console.log(data)
  try{
    const response = await axios.put(API_URL + api/v1/user/update/${data.id}, data)
    console.log(response.data);
    return response.data;
  }catch(error){
    console.error(error.response.data)
  }
  
  /*
  const response = await fetch(API_URL + "api/v1/user/update/" + id, {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "multipart/form-data",
      //"Authorization": Bearer ${token}
    },
  });
});
*/

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /*----------------------login----------------------------------*/
      .addCase(login.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(
        login.fulfilled,
        (state, { payload: { message, user, token } }) => {
          state.isloading = false;
          if (message) {
            state.message = message;
            console.warn(state.message);
          } else {
            state.user = user;
            state.token = token;
            console.warn("sucesso!");
          }
        }
      )
      .addCase(login.rejected, (state, action) => {
        state.isloading = true;
      });
  },
});

export default authSlice.reducer;
