import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./Slice/movie";
import userReducer from "./Slice/user";
import cinemaReducer from "./Slice/cinema";
const store = configureStore({
  reducer: {
    movieReducer,
    userReducer,
    cinemaReducer,
  },
});

export default store;
