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
  res.send(req.body);
}

export { getIndexPage, getFormPage, createMessage };
