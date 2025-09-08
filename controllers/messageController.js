import { getMessageById } from "../db/queries.js";
import { CustomNotFoundError } from "../errors/CustomNotFoundError.js";

async function getMessagePage(req, res) {
  const { messageId } = req.params;
  const message = await getMessageById(messageId);

  if (!message) throw new CustomNotFoundError("Message not found");

  res.render("message", { message });
}

export { getMessagePage };
