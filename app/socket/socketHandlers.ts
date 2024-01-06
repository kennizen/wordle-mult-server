import { Server, Socket } from "socket.io";

export function joinUserToRooms(io: Server, socket: Socket) {
  socket.on("join", (roomId: string) => {
    socket.join(roomId);
    console.log(`${socket.id} joined in room ${roomId}`);
  });
}

export function startGame(io: Server, socket: Socket) {
  socket.on("start-game", (roomId: string) => {
    console.log("starting game for room", roomId);
    // socket.to(roomId).emit("start-game");
    io.to(roomId).emit("start-game");
  });
}

export function playerReady(io: Server, socket: Socket) {
  socket.on("player-is-ready", (roomId: string) => {
    console.log("2nd player joined", roomId);
    socket.to(roomId).emit("player-joined");
  });
}
