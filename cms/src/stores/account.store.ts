import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../apis/account.api";
import {
  IAccountState,
  ICreateANewAccount,
  IDeleteAccountPayload,
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

// Delete an Account
export const deleteAnAccount = createAsyncThunk(
  `${name}/deleteAnAccount`,
  async (payload: IDeleteAccountPayload) => {
    await userService.deleteAnAccount(payload._id);
    return payload;
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
      })
      .addCase(deleteAnAccount.fulfilled, (state, action) => {
        state.accounts = state.accounts.filter(
          (account: { _id: string }) => account._id !== action.payload._id
        );
      });
  },
});

export default userSlice.reducer;
