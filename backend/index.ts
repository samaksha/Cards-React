import express from "express";
import { APP_PORT } from "./config";

const main = () => {
  const app = express();

  app.get("/health-check", (_, res) => {
    res.send("OK");
  });
  app.listen(APP_PORT, () => console.log(`Server running on port ${APP_PORT}`));
};

main();
