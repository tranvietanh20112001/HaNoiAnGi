import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../apis/auth";
import { ILoginPayload, IUserState } from "../interfaces/auth";

const initialState: IUserState = {
  user: null,
};
export const name = "userState";

// Login --------------------------------------------------------
export const login = createAsyncThunk(
  `${name}/login`,
  async (payload: ILoginPayload) => {
    const response = await authService.login(payload);
    localStorage.setItem("token", response.data.token);
    return response.data;
  }
);

export const loadUser = createAsyncThunk(`${name}/loadUser`, async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const response = await authService.loadUser(token);
    return response.data;
  }
});

const userSlice = createSlice({
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
    builder.addCase(login.fulfilled, (state) => {
      state.user = null;
    });

    builder.addCase(loadUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
