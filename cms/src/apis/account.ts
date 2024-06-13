import axios from "axios";
import { API_URL } from "../config/config";
import { ICreateANewAccount } from "../interfaces/account";
const fetchAccounts = async () => {
  return await axios.get(`${API_URL}/user/users`);
};

const createANewAccount = async (data: ICreateANewAccount) => {
  return await axios.post(`${API_URL}/auth/register`, data);
};

export default { fetchAccounts, createANewAccount };
