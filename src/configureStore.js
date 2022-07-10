import { configureStore } from "@reduxjs/toolkit";
import user from "./Slice/user";
import movie from "./Slice/movie";

const store = configureStore({
  reducer: {
    movie,
    user,
  },
});

export default store;
