import express from "express";
import path from "node:path";

const app = express();

const assetsPath = path.join(import.meta.dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("index", { variable: "Hello from index!" }));
app.get("/new", (req, res) => res.send("Hello from new message form!"));

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Listening on port ${PORT}!`);
});
