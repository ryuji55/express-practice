// import express, { Request, Response, NextFunction } from "express";
// import { PrismaClient } from "@prisma/client";
// const router = express.Router();

// const prisma = new PrismaClient();

// /* GET users listing. */
// // router.get("/", (req: Request, res: Response, next: NextFunction) => {
// //   const name = req.query.name;
// //   const data = {
// //     title: "usersPage",
// //     content: "これは、test。" + name,
// //   };

// //   res.render("users", data);
// // });

// // router.post("/post", (req: Request, res: Response, next: NextFunction) => {
// //   const msg = req.body["message"];
// //   const data = {
// //     title: "usersPage",
// //     content: "あなたは" + msg + "と送信しました",
// //   };
// //   res.render("users", data);
// // });

// // router.post("/submit-form", async (req: Request, res: Response) => {
// //   const user = await prisma.user.create({
// //     data: {
// //       email: req.body.email,
// //       name: req.body.name,
// //     },
// //   });
// //   console.log("Received data:", req.body);
// //   res.status(200).send("Form data received");
// // });

// // export { router as usersRouter };
