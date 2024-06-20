import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../apis/account.api";
import {
  IAccountState,
  ICreateANewAccount,
} from "@interfaces/account.interface";

const initialState: IAccountState = {
  accounts: [],
  account: null,
};

export const name = "userState";
// Get all Accounts -----------------------------------------------
export const getAccounts = createAsyncThunk(`${name}/getUsers`, async () => {
  const response = await userService.fetchAccounts();
  return response.data;
});

// Create an Account -----------------------------------------------
export const createANewAccount = createAsyncThunk(
  `${name}/createANewAccount`,
  async (data: ICreateANewAccount) => {
    const response = await userService.createANewAccount(data);
    return response.data;
  }
);

const userSlice = createSlice({
  name,
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAccounts.fulfilled, (state, action) => {
        state.accounts = action.payload;
      })
      .addCase(createANewAccount.fulfilled, (state, action) => {
        state.account = action.payload;
      });
  },
});

export default userSlice.reducer;
