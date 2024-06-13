export interface ILoginPayload {
  username: string;
  password: string;
}

export interface IUser {
  username: string;
  password: string;
}

export interface IUserState {
  user: IUser | null;
}
