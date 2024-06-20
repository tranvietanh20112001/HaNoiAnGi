export interface IAccount {
  _id: string;
  username: string;
  password: string;
  role: string;
  status: string;
  email: string;
  fullName: string;
}

export interface IAccountState {
  accounts: IAccount[];
  account: IAccount | null;
}

export interface ICreateANewAccount {
  username: string;
  password: string;
  role: string;
}

export interface IDeleteAccountPayload {
  _id: string;
}
