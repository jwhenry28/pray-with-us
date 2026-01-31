import { Request, Response, NextFunction, Router } from "express";

import { getAllSaints } from "@/controllers/saints.js";

const getSaints = (req: Request, res: Response, next: NextFunction) => {
  const saints = getAllSaints();
  res.json(saints);
};

const router = Router();

router.get("/saints", getSaints);

export default router;
