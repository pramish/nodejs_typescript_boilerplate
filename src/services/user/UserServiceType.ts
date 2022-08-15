import { IUserResponse } from "../../repository";

export interface IAuthenticateUserServiceType {
  authenticateUser(): IUserResponse;
}
