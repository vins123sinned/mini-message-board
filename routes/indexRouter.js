import { Router } from "express";

const indexRouter = Router();

const messages = [
  {
    text: 'Hello, world!',
    user: 'First computer',
    added: new Date(),
  },
  {
    text: 'There\'s a moth in my computer!',
    user: 'Harvard',
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => res.send('testing...'));

export { indexRouter };