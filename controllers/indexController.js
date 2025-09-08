import { getMessages, addMessage } from "../db/queries.js";
import { CustomNotFoundError } from "../errors/CustomNotFoundError.js";

async function getIndexPage(req, res) {
  const messages = await getMessages();

  if (!messages) throw new CustomNotFoundError("Can't get messages");

  res.render("index", { messages });
}

function getFormPage(req, res) {
  res.render("form");
}

async function createMessage(req, res) {
  const { username, message } = req.body;

  await addMessage(username, message);

  res.redirect("/");
}

export { getIndexPage, getFormPage, createMessage };
