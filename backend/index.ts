import express from "express";
import { APP_PORT } from "./config";
import cors from "cors";
import { Server } from "socket.io";

const main = () => {
  const app = express();
  const io = new Server(3000, {
    cors: {
      origin: ["https://5jbe3d-5173.csb.app"],
    },
  });

  app.use(cors());
  app.use(express.json());

  app.get("/health-check", (_, res) => {
    res.send("OK");
  });

  io.on("connection", (socket) => {
    console.log("socket at 3000");
    socket.on("get-data", (message) => {
      console.log(message);
      socket.emit("receive-data", 1);
    });
  });

  app.post("/upload", (req, res) => {
    console.log(req.body);
    return res.status(200).send("OK");
  });
  app.listen(APP_PORT, () => console.log(`Server running on port ${APP_PORT}`));
};

main();
