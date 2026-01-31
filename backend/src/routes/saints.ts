import { Request, Response, NextFunction, Router } from "express";

import {
  getAllSaints,
  getSaintByID,
  upsertSaint,
} from "@/controllers/saints.js";
import { Saint } from "@/models/saint.js";
import { BadRequestError } from "@/models/error.js";

const getSaints = (req: Request, res: Response, next: NextFunction) => {
  const saints = getAllSaints();
  res.json(saints);
};

const getSaint = (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  const saint = getSaintByID(id);
  res.json(saint);
};

const postSaint = (
  req: Request<{ id: string; body: Saint }>,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  if (!id) {
    throw new BadRequestError("id parameter required");
  }

  const saint: Saint = req.body;
  saint.id = id;
  const updated = upsertSaint(saint);
  res.json(updated);
};

const router = Router();

router.get("/saints", getSaints);
router.get("/saints/:id", getSaint);
router.post("/saints/:id", postSaint);

export default router;
