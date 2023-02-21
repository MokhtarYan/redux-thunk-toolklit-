import { configureStore } from "@reduxjs/toolkit";
import { todoSlicereducer } from "./slice";

export const store = configureStore({
  reducer: { movies: todoSlicereducer.reducer },
});
