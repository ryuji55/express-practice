import express, { Request, Response, NextFunction } from "express";
const router = express.Router();

/* GET users listing. */
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  const name = req.query.name;
  const data = {
    title: "usersPage",
    content: "これは、test。" + name,
  };

  res.render("users", data);
});

router.post("/post", (req: Request, res: Response, next: NextFunction) => {
  const msg = req.body["message"];
  const data = {
    title: "usersPage",
    content: "あなたは" + msg + "と送信しました",
  };
  res.render("users", data);
});

export { router as usersRouter };
