import { Socket } from "socket.io";

export function socketHandler(socket: Socket) {
  socket.on("join", (userId) => {
    console.log("joined with user id", userId);
    socket.join(userId);
  });
}
