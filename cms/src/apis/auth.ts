import axios from "axios";
import { API_URL } from "../config/config";
import { ILoginPayload } from "../interfaces/auth";

const login = async (data: ILoginPayload) => {
  return await axios.post(`${API_URL}/auth/login`, data);
};

const loadUser = async (token: string) => {
  return axios.get(`${API_URL}/auth/user`, {
    headers: { Authorization: token },
  });
};
export default { login, loadUser };
