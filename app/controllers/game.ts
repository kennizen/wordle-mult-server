import { Request, Response } from "express";
import { WORDS } from "../../data/5LetterWords";
import { db } from "../../server";
import { RunResult } from "sqlite3";

export function getWord(req: Request, res: Response) {
  const word = WORDS[Math.floor(Math.random() * (WORDS.length + 1))].toLowerCase();

  db.all(`SELECT * FROM rooms`, (err: Error, rows: unknown[]) => console.log("rows", rows));

  res.status(200).send({
    word,
  });
}

export function addWord(req: Request, res: Response) {
  const { roomId, word } = req.body;

  db.run(`INSERT INTO rooms VALUES (?, ?)`, [roomId, word], (err: Error, result: RunResult) => {
    if (err) res.status(400).send(err.message);
    else res.status(200).send("Word addition successful");
  });
}

export function getWordByRoomId(req: Request, res: Response) {
  const { roomId } = req.params;

  db.all(
    `SELECT * FROM rooms WHERE room_id = "${roomId}"`,
    (err: Error, rows: { room_id: string; game_word: string }[]) => {
      if (err) res.status(400).send(err.message);
      else res.status(200).send({ word: rows[0]?.game_word });
    }
  );
}
