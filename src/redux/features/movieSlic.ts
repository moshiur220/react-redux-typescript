import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { movieListData } from "../../services/movie";
import { FunctionBody } from "typescript";
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
export interface MovieList {
  title: string;
  description: string;
  imageUrl: string;
  length: number;
  releaseYear: string;
  rating: number;
}
export interface MovieState {
  data?: MovieList[];
  status: string;
}

const initialState: MovieState = {
  //  data:[],
  status: STATUSES.IDLE,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovie(state, action: PayloadAction<MovieList[]>) {
      state.data = action.payload;
    },
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMovie, setStatus } = movieSlice.actions;

export default movieSlice.reducer;

export function fetchProducts() {
  return async function fetchProductThunk(
    dispatch: Function,
    getState: Function
  ) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const { data, status } = await movieListData();
      dispatch(setMovie(data));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (err) {
      console.log(err);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
