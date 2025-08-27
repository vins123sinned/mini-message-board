import express from "express";
import path from "node:path";
import { indexRouter } from "./routes/indexRouter.js";

const app = express();

// static path configuration
const assetsPath = path.join(import.meta.dirname, "public");
app.use(express.static(assetsPath));

// view engine and path configuration
app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

// router configuration
app.use("/", indexRouter);

// error middlewares
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Listening on port ${PORT}!`);
});
