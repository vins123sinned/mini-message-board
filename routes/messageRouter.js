import { Router } from "express";
import { getMessagePage } from "../controllers/messageController.js";

const messageRouter = Router();

messageRouter.get("/:messageId", getMessagePage);

export { messageRouter };
