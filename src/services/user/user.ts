import { IAuthenticateUserServiceType } from "./UserServiceType";

import { IUserResponse } from "../../repository";

export class UserService implements IAuthenticateUserServiceType {
  private email: string;
  private password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  authenticateUser(): IUserResponse {
    return { isSuccess: false, message: "User authenticated", statusCode: 200 };
  }
}
