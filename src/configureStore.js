import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./Slice/movie";
import user from "./Slice/user";
const store = configureStore({
  reducer: {
    movieReducer,
    user,
  },
});

export default store;
