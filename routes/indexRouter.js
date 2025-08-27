import { Router } from "express";
import { getIndexPage, getFormPage } from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", getIndexPage);
indexRouter.get("/new", getFormPage)

export { indexRouter };
