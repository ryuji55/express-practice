import express, { Request, Response, NextFunction } from "express";
const router = express.Router();

/* GET home page. */
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.render("index", { title: "Express" });
});

router.get("/api", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "初めてのexpress api" });
});

export { router as indexRouter };
