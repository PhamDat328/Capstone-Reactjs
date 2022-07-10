import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const movie = createSlice({
  name: "movie",
  initialState: {
    movies: [],
  },
  reducers: {},
});

export default movie.reducer;
