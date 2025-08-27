import { Router } from "express";
import {
  getIndexPage,
  getFormPage,
  createMessage,
} from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", getIndexPage);
indexRouter.get("/new", getFormPage);

indexRouter.post("/new", createMessage);

export { indexRouter };
