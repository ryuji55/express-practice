import { Request, Response } from "express";
import { UserService } from "../../domain/user/services/UserService";
export class UserController {
  constructor(private userService: UserService) {}

  async createUser(req: Request, res: Response) {
    const { id, name, email } = req.body;
    const user = await this.userService.createUser(id, name, email);
    res.json(user);
  }
}
