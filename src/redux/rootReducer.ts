import { combineReducers } from "@reduxjs/toolkit";
import { apiSlice } from "./slices";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
});

type RootReducer = typeof rootReducer;

export { rootReducer };
export type { RootReducer };
