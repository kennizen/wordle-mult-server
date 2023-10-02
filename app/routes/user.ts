import { Router } from "express";
import { joinPlayers } from "../controllers/user";

const router = Router();

router.get("/", joinPlayers);

export default router;
