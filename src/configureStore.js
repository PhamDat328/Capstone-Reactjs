import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./Slice/movie";
import user from "./Slice/user";
import cinemaReducer from "./Slice/cinema";
const store = configureStore({
  reducer: {
    movieReducer,
    user,
    cinemaReducer,
  },
});

export default store;
