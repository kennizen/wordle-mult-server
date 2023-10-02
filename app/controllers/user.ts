import { Request, Response } from "express";

export function joinPlayers(req: Request, res: Response) {
  console.log("hello from server");
  res.send("hello");
}
