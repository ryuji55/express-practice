import { User } from "../entities/User";
import { IUserRepository } from "../repositories/IUserRepository";
import { UserName } from "../valueObject/UserName";
import { UserId } from "../valueObject/UserId";
export class UserService {
  constructor(private userRepository: IUserRepository) {}

  async createUser(id: string, name: string, email: string): Promise<User> {
    const userId = new UserId(id);
    const userName = new UserName(name);
    const user = new User(userId, userName, email);
    return this.userRepository.create(user);
  }
}
