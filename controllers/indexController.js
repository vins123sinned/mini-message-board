import { messages } from "../db.js";
import { CustomNotFoundError } from "../errors/customNotFoundError.js";

async function getIndexPage(req, res) {
  if (!messages) throw new CustomNotFoundError("Can't get messages");

  res.render("index", { messages: messages });
}

export { getIndexPage };
