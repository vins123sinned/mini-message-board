import { messages } from "../db.js";

async function getIndexPage(req, res) {
  res.render("index", { messages: messages });
}

export { getIndexPage };
