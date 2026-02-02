import express from "express";
import cors from "cors";
import "dotenv/config";

import saintsRouter from "@/routes/saints.js";
import { handleError } from "./controllers/errors.js";
import { NotFoundError } from "./models/error.js";

const app = express();
const host = process.env.BACKEND_HOST;
const port = process.env.BACKEND_PORT;

if (!host || !port) {
  console.error(
    `empty BACKEND_HOST or BACKEND_PORT values. cannot start without both: host '${host}', port '${port}'`,
  );
  process.exit(1);
}

app.use((req, res, next) => {
  console.log("routing for", req.method, req.path);
  next();
});
app.use(cors());
app.use(express.json());
app.use(saintsRouter);
app.use("/", () => {
  throw new NotFoundError();
});

app.use(handleError);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
