import { ILoginPayload, IUserState } from "../interfaces/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../apis/auth";

export const name = "userState";
const initialState: IUserState = {
  user: null,
  error: null,
};

// Login --------------------------------------------------------
export const login = createAsyncThunk(
  `${name}/login`,
  async (payload: ILoginPayload) => {
    const response = await authService.login(payload);
    localStorage.setItem("token", response.data.token);
    return response.data;
  }
);

// Get current user ---------------------------------------------
export const getCurrentUser = createAsyncThunk(
  `${name}/getCurrentUser`,
  async (token: string) => {
    const response = await authService.loadUser(token);
    return response.data;
  }
);

const authSlice = createSlice({
  name,
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("token");
      console.log("Logout successfully");
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(login.fulfilled, (state) => {
        state.error = null;
      })

      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
