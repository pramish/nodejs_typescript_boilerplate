export interface IUser {
  email: string;
  password: string;
}

export interface IUserResponse {
  isSuccess: boolean;
  message: string;
  statusCode: number;
}
