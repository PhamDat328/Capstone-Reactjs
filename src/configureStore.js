import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./Slice/movie";
import user from "./Slice/user";
import cinema from "./Slice/cinema";
const store = configureStore({
  reducer: {
    movieReducer,
    user,
    cinema,
  },
});

export default store;
