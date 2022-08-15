import { Router } from "express";

import { AuthenticateUser } from "../../controllers";

export const AuthRouter = Router();

AuthRouter.post("/signin", AuthenticateUser);
