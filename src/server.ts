import { createServer } from "http";

import { Logger } from "./logger";

import { CONFIG } from "./config";
import { app } from "./";

const startExpressServer = async (port: string | undefined) => {
  const expressServer = createServer(app);
  expressServer.listen(port, () => {
    Logger.info(`
        ################################################
        🛡️  Server listening on port: ${port} in ${CONFIG.environment} environment🛡️
        ################################################
      `);
  });
};

startExpressServer(CONFIG.port);
