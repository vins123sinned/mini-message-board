import express from "express";
import path from "node:path";
import { indexRouter } from "./routes/indexRouter.js";
import { messageRouter } from "./routes/messageRouter.js";

const app = express();

// parse form's url encoded data into req.body
app.use(express.urlencoded({ extended: true }));

// static path configuration
const assetsPath = path.join(import.meta.dirname, "public");
app.use(express.static(assetsPath));

// view engine and path configuration
app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

// router configuration
app.use("/", indexRouter);
app.use("/messages", messageRouter);
app.get("/{*splat}", (req, res) =>
  res.status(404).render("404", { message: "Unknown route" }),
);

// error middlewares
app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  console.error(err);

  if (err.statusCode && err.statusCode === 404) {
    res.status(404).render("404", { message: err.message });
    return;
  }

  res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Listening on port ${PORT}!`);
});
