import { Server, Socket } from "socket.io";
import { appendFile, writeFile } from "fs";
import { EOL } from "os";

export function joinUserToRooms(io: Server, socket: Socket) {
  socket.on("join", (roomId: string) => {
    socket.join(roomId);
    console.log(`${socket.id} joined in room ${roomId}`);
    // socket.to(roomId).emit("player-joined", socket.id);

    appendFile("db.txt", `${roomId}${EOL}`, (err) => {
      console.log("err appending in file", err);
    });
  });
}

export function startGame(io: Server, socket: Socket) {
  socket.on("start-game", (roomId: string) => {
    console.log("starting game for room", roomId);
    socket.to(roomId).emit("start-game");
    // io.to(roomId).emit("begin-game");
  });
}
