import { Router } from "express";

const messageRouter = Router();

messageRouter.get("/:messageId", (req, res) => {
  const { messageId } = req.params;
  res.send(`Message ID: ${messageId}`);
});

export { messageRouter };
