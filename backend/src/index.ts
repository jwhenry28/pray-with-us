import express from "express";

import saintsRouter from "@/routes/saints.js";
import { handleError } from "./controllers/errors.js";
import { NotFoundError } from "./models/error.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(saintsRouter);
app.use("/", () => {
  throw new NotFoundError();
});

app.use(handleError);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
