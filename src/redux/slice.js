import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: null,
};

const getMovies = (options) =>
  createAsyncThunk(
    "movies/getMovies",
    // callback function
    async (thunkAPI) => {
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  );

export const todoSlicereducer = createSlice({
  name: "movies",
  initialState,
  reducers: {
    fetchData: (state, { payload }) => {
      state.data = payload;
    },
  },
});
export const { fetachData } = todoSlicereducer.actions;
