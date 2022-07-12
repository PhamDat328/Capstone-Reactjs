import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "../Services/movieAPI";

const initialState = {
  bannerMovies: [],
};

const movie = createSlice({
  name: "movie",
  initialState,
  reducers: {},
});

// thunk action
export const getBannerMovieShowing = createAsyncThunk(
  "movie/getBannerMovieShowing",
  async () => {
    try {
      const data = await movieAPI.getBannerMovieShowing();
 
      return data
    } catch (error) {
      console.log(error);
    }
  }
);

export default movie.reducer;
