import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userMaunalAllReducer from "../component/footer/slice/footerSlice";
import menuBar from "../component/header/slice/headerSlice";

const rootReducer = combineReducers({
  userManualAll: userMaunalAllReducer,
  menuBar: menuBar,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof rootReducer>;
