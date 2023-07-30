import { UserController } from "./UserController";
import { Request, Response, Router } from "express";
import { PrismaUserRepository } from "../../infrastructure/database/PrismaUserRepository";
import { UserService } from "../../domain/user/services/UserService";
import { UserApplicationService } from "./UserApplicationService";

const userRouter = Router();
const userRepository = new PrismaUserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);
const userApplicationService = new UserApplicationService(
  userRepository,
  userService
);

userRouter.get("/", async (req, res) => {
  const users = await userApplicationService.getUsers();
  res.json(users);
});

userRouter.post("/submit-form", async (req: Request, res: Response) => {
  try {
    await userController.createUser(req, res);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(500).json("エラーオブジェクトでないエラーを受け取りました");
    }
  }
});

export { userRouter };
