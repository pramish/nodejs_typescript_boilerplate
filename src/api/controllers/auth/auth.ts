import { RequestHandler, Request, Response } from "express";

import { Logger } from "../../../logger";

export const AuthenticateUser: RequestHandler = async (
  request: Request,
  response: Response,
) => {
  Logger.info("Getting request body");

  return response.status(200).json({
    success: true,
    message: "User signed in",
  });
};
