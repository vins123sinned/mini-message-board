import { body, validationResult } from "express-validator";
import { getMessages, addMessage } from "../db/queries.js";
import { CustomNotFoundError } from "../errors/CustomNotFoundError.js";

const requiredErr = "is required";
const usernameLengthErr = "must not exceed 80 characters";
const textLengthError = "must not exceed 255 characters";

const validateMessage = [
  body("username")
    .notEmpty()
    .bail()
    .withMessage(`Name ${requiredErr}`)
    .isLength({ min: 1, max: 80 })
    .bail()
    .withMessage(`Name ${usernameLengthErr}`),
  body("message")
    .notEmpty()
    .bail()
    .withMessage(`Message ${requiredErr}`)
    .isLength({ min: 1, max: 255 })
    .bail()
    .withMessage(`Message ${textLengthError}`),
];

const getIndexPage = async (req, res) => {
  const messages = await getMessages();
  if (!messages) throw new CustomNotFoundError("Can't get messages");

  res.render("index", { messages });
};

const getFormPage = (req, res) => {
  res.render("form");
};

const createMessage = [
  validateMessage,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("form", {
        errors: errors.array(),
      });
    }
    const { username, message } = req.body;
    await addMessage(username, message);
    res.redirect("/");
  },
];

export { getIndexPage, getFormPage, createMessage };
