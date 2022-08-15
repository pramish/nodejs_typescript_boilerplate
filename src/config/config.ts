import { config } from "dotenv";

config();

export const CONFIG = {
  port: process.env.PORT,
  environment: process.env.NODE_ENV,
  logs: {
    level: "silly",
  },
  dbURL: process.env.DB_URL,
  clientURL: process.env.CLIENT_URL,
  awsKey: process.env.AWS_ACCESS_KEY,
  awsSecret: process.env.AWS_SECRECT_KEY,
  region: process.env.AWS_REGION,
  apiVersion: process.env.API_VERSION,
};
