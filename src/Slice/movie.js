import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "../Services/movieAPI";
import { combineReducers } from "redux";

const initialState = {
  isDisplayTrailer: false,
  bannerMovies: [],
  movieShowing: [],
  selectPage: 1,
};

// thunk action
export const getBannerMovieShowing = createAsyncThunk(
  "movie/getBannerMovieShowing",
  async () => {
    try {
      const { data } = await movieAPI.getBannerMovieShowing();
      return { bannerMovies: data.content };
    } catch (error) {
      console.log(error);
    }
  }
);

export const getMovieShowingPages = createAsyncThunk(
  "movie/getMovieShowingPages",
  async () => {
    try {
      const {data} = await movieAPI.getMovieShowingPages(initialState.selectPage);
      return { movieShowing: data.content.items };
    } catch (error) {
      console.log(error);
    }
  }
);

const movieList = createSlice({
  name: "movieList",
  initialState,
  reducers: {
    setSelectPage: (state, action) => {
      state.selectPage = action.payload;
    },
  },
  extraReducers: {
    [getMovieShowingPages.pending]: (state, { payload }) => {},
    [getMovieShowingPages.fulfilled]: (state, { payload }) => {
      state.movieShowing = payload.movieShowing;
    },
    [getMovieShowingPages.rejected]: (state, { error }) => {
      state.error = error.message;
    },
  },
});

const bannerMovie = createSlice({
  name: "bannerMovie",
  initialState,
  reducers: {},
  extraReducers: {
    [getBannerMovieShowing.pending]: (state, { payload }) => {},
    [getBannerMovieShowing.fulfilled]: (state, { payload }) => {
      state.bannerMovies = payload.bannerMovies;
    },
    [getBannerMovieShowing.rejected]: (state, { error }) => {
      state.error = error.message;
    },
  },
});

const movieReducer = combineReducers({
  movieList: movieList.reducer,
  bannerMovie: bannerMovie.reducer,
});

export const { setSelectPage } = movieList.actions;
export default movieReducer;
