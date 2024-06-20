import axios from "axios";
import { API_URL } from "../config/config";
import { ICreateANewAccount } from "../interfaces/account.interface";
const fetchAccounts = async () => {
  return await axios.get(`${API_URL}/user/users`);
};

const createANewAccount = async (data: ICreateANewAccount) => {
  return await axios.post(`${API_URL}/auth/register`, data);
};

// Delete an Account
const deleteAnAccount = async (payload: string) => {
  const response = await axios.delete(`${API_URL}/user/user/${payload}`);
  return response.data;
};

export default { fetchAccounts, createANewAccount, deleteAnAccount };
