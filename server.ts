import dotenv from "dotenv";
import app, { sqlite3 } from "./app";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import { joinUserToRooms, startGame } from "./app/socket/socketHandlers";

dotenv.config();

const port = process.env.PORT || 8000;
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

export const db = new sqlite3.Database("game.db", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("connected to database");
});

// function handleCreateTable() {
//   db.run(
//     `CREATE TABLE rooms (
//     room_id PRIMARY KEY NOT NULL,
//     game_word VARCHAR(20) NOT NULL
//   )`,
//     (err: Error) => {
//       console.log(err.message);
//       if (err) return;
//     }
//   );
// }

// handleCreateTable();

function registerHandlers(socket: Socket) {
  joinUserToRooms(io, socket);
  startGame(io, socket);
}

io.on("connection", registerHandlers);

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
