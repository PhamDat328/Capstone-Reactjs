import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "../Services/movieAPI";

const initialState = {
  bannerMovies: [],
};

// thunk action
export const getBannerMovieShowing = createAsyncThunk(
  "movie/getBannerMovieShowing",
  async () => {
    try {
      const { data } = await movieAPI.getBannerMovieShowing();

      return { bannerMovies: data };
    } catch (error) {
      console.log(error);
    }
  }
);

const movie = createSlice({
  name: "movie",
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

export default movie.reducer;
