import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cinemaAPI from "../Services/cinemaAPI";
import { combineReducers } from "redux";

const initialState = {
  cinemaList: [],
  cinemaListInfo: [],
  movieSchedule: [],
};

export const getCinemaList = createAsyncThunk(
  "cinema/getCinemaList",
  async () => {
    try {
      const { data } = await cinemaAPI.getCinemaList();
      return { cinemaList: data.content };
    } catch (error) {
      console.log(error);
    }
  }
);

export const getCinemaListInfo = createAsyncThunk(
  "cinema/getCinemaListInfo",
  async (cinemaName) => {
    try {
      const { data } = await cinemaAPI.getCinemaListInfo(cinemaName);
      return { cinemaListInfo: data.content };
    } catch (error) {
      console.log(error);
    }
  }
);

export const getMovieScheduleByCinema = createAsyncThunk(
  "cinema/getMovieScheduleByCinema",
  async () => {
    try {
      const { data } = await cinemaAPI.getMovieScheduleByCinema();
      return { movieSchedule: data.content };
    } catch (error) {
      console.log(error);
    }
  }
);

const cinemaList = createSlice({
  name: "cinemaList",
  initialState,
  reducer: {},
  extraReducers: {
    [getCinemaList.pending]: (state, { payload }) => {},
    [getCinemaList.fulfilled]: (state, { payload }) => {
      state.cinemaList = payload.cinemaList;
    },
    [getCinemaList.rejected]: (state, { error }) => {
      state.error = error.message;
    },
  },
});

const cinemaListInfo = createSlice({
  name: "cinemaListInfo",
  initialState,
  reducer: {},
  extraReducers: {
    [getCinemaListInfo.pending]: (state, { payload }) => {},
    [getCinemaListInfo.fulfilled]: (state, { payload }) => {
      state.cinemaListInfo = payload.cinemaListInfo;
    },
    [getCinemaListInfo.rejected]: (state, { error }) => {
      state.error = error.message;
    },
  },
});

const movieSchedule = createSlice({
  name: "movieSchedule",
  initialState,
  reducer: {},
  extraReducers: {
    [getMovieScheduleByCinema.pending]: (state, { payload }) => {},
    [getMovieScheduleByCinema.fulfilled]: (state, { payload }) => {
      state.movieSchedule = payload.movieSchedule;
    },
    [getMovieScheduleByCinema.rejected]: (state, { error }) => {
      state.error = error.message;
    },
  },
});

const cinemaReducer = combineReducers({
  cinemaList: cinemaList.reducer,
  cinemaListInfo: cinemaListInfo.reducer,
  movieSchedule: movieSchedule.reducer,
});

export default cinemaReducer;
