import { getMessages, addMessage } from "../db.js";
import { CustomNotFoundError } from "../errors/customNotFoundError.js";

async function getIndexPage(req, res) {
  const messages = await getMessages();

  if (!messages) throw new CustomNotFoundError("Can't get messages");

  res.render("index", { messages });
}

function getFormPage(req, res) {
  res.render("form");
}

async function createMessage(req, res) {
  const { name, message } = req.body;

  await addMessage(name, message);

  res.redirect("/");
}

export { getIndexPage, getFormPage, createMessage };
