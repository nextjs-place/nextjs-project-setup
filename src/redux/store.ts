import { configureStore } from "@reduxjs/toolkit";
import {
  type TypedUseSelectorHook,
  useSelector,
  useDispatch,
} from "react-redux";

import { rootReducer } from "./rootReducer";
import { apiSlice } from "./slices";

type RootStore = typeof rootStore;
type RootState = ReturnType<typeof rootStore.getState>;
type AppDispatch = typeof rootStore.dispatch;

const rootStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type { RootStore, RootState, AppDispatch };

export { rootStore, useAppDispatch, useAppSelector };
