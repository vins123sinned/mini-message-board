import { messages } from "../db.js";
import { CustomNotFoundError } from "../errors/customNotFoundError.js";

function getIndexPage(req, res) {
  if (!messages) throw new CustomNotFoundError("Can't get messages");

  res.render("index", { messages: messages });
}

function getFormPage(req, res) {
  res.render("form");
}

function createMessage(req, res) {
  const { name, message } = req.body;

  messages.push({ text: message, user: name, added: new Date() });
  res.redirect("/");
}

export { getIndexPage, getFormPage, createMessage };
