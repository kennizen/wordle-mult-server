import dotenv from "dotenv";
import app from "./app";
import { createServer } from "http";
import { Server } from "socket.io";
import { socketHandler } from "./app/socket/socket";

dotenv.config();

const port = process.env.PORT || 8000;
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", socketHandler);

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
