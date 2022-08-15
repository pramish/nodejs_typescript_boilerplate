import { IUser, IUserResponse } from "./UserType";

import { Logger } from "../../logger/logger";

export const UserSignIn = async ({
  email,
  password,
}: IUser): Promise<IUserResponse> => {
  Logger.info("Checking if user email address exists or not.");

  return {
    isSuccess: true,
    message: "User verified",
    statusCode: 200,
  };
};
