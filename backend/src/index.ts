import express, { Request, Response } from "express";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.render("index", { title: "My App" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
