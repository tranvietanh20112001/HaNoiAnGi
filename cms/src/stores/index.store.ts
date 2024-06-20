import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./account.store";
import authReducer from "./auth.store";
export const store = configureStore({
  reducer: {
    accounts: accountReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
