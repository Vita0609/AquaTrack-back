import { Router } from "express";
import usersRouter from "./users.js";
import waterRouter from "./water.js";

const router = Router();

router.use("/users", usersRouter);
router.use("/water", waterRouter);

export default router;
