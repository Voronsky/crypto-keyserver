import express from "npm:express";
import { generateKey } from "../controllers/keys.ts";

const router = express.Router();


router.post("/");
router.get("/",generateKey);
router.patch("/");
router.delete("/");

export default router;