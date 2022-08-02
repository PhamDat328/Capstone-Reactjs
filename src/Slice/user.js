import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userAPI from "../Services/userAPI";
import { history } from "../App";
let user = {};

if (localStorage.getItem("userLogin")) {
  user = JSON.parse(localStorage.getItem("userLogin"));
}

const initialState = {
  userLogin: user,
  userInfo: {},
};

export const handleUserLogin = createAsyncThunk(
  "user/userLogin",
  async (params) => {
    try {
      const result = await userAPI.userLogin(params);
      return { userLogin: result.data.content };
    } catch (error) {
      console.log(error.response.data);
    }
  }
);

export const handleUserInfo = createAsyncThunk("user/userInfo", async () => {
  try {
    const { data } = await userAPI.getUserInfo();
    return { userInfo: data.content };
  } catch (error) {
    console.log(error.response.data);
  }
});

const userLoginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [handleUserLogin.pending]: (state, { payload }) => {},
    [handleUserLogin.fulfilled]: (state, { payload }) => {

      state.userLogin = payload.userLogin;
      localStorage.setItem("userLogin", JSON.stringify(state.userLogin));
      localStorage.setItem("accessToken", state.userLogin.accessToken);
      setTimeout(() => {
        history.back();
      }, 500);
    },
    [handleUserLogin.rejected]: (state, { error }) => {
      alert("Tài khoảng hoặc mật khẩu không đúng");
      state.error = error.message;
    },
  },
});

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {},
  extraReducers: {
    [handleUserInfo.pending]: (state, { payload }) => {},
    [handleUserInfo.fulfilled]: (state, { payload }) => {
      state.userInfo = payload.userInfo;
    },
    [handleUserInfo.rejected]: (state, { error }) => {
      state.error = error.message;
    },
  },
});

const userReducer = combineReducers({
  userLoginSlice: userLoginSlice.reducer,
  userInfoSlice: userInfoSlice.reducer,
});

export default userReducer;
