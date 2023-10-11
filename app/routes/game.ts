import { Router } from "express";
import { addWord, getWord } from "../controllers/game";

const router = Router();

router.get("/", getWord);
router.post("/", addWord);

export default router;
