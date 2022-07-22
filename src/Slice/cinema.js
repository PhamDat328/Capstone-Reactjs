import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cinemaAPI from "../Services/cinemaAPI";

const initialState = {
  cinemaInfo: [],
};

export const getInfoCinema = createAsyncThunk(
  "cinema/getInfoCinema",
  async () => {
    try {
      const { data } = await cinemaAPI.getInfoCinema();
      console.log(data.content);
      return { cinemaInfo: data.content };
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
    [getInfoCinema.pending]: (state, { payload }) => {},
    [getInfoCinema.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.cinemaInfo = payload.cinemaInfo;
    },
    [getInfoCinema.rejected]: (state, { error }) => {
      state.error = error.message;
    },
  },
});

export default cinemaList.reducer;
