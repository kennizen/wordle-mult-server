import { Router } from "express";
import { addWord, getWord, getWordByRoomId } from "../controllers/game";

const router = Router();

router.get("/", getWord);
router.get("/:roomId", getWordByRoomId);
router.post("/", addWord);

export default router;
