import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./account";
import authReducer from "./auth";
export const store = configureStore({
  reducer: {
    accounts: accountReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
