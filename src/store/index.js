import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import bookSlice from "./bookSlice";
import reportSlice from "./reportSlice";

const store = configureStore({
  reducer: {
    book: bookSlice,
    auth: authSlice,
    report: reportSlice,
  },
});

export default store;
