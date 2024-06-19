import { ILoginPayload } from "../interfaces/auth";

import { API_URL } from "../config/config";
import axios from "axios";

export const login = async (payload: ILoginPayload) => {
  return axios.post(`${API_URL}/auth/login`, payload);
};

// Load User
const loadUser = async (token: string) => {
  return axios.get(`${API_URL}/auth/user`, {
    headers: { Authorization: token },
  });
};

export default {
  login,
  loadUser,
};
