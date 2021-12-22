import { combineReducers } from "redux";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import friendsReducer from "../features/friendsSlice";

const reducer = combineReducers({
  friendsReducer,
});

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
