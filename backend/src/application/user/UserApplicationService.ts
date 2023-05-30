import { UserService } from "./../../domain/user/services/UserService";
import { IUserRepository } from "../../domain/user/repositories/IUserRepository";
import { User } from "../../domain/user/entities/User";
import { UserId } from "../../domain/user/valueObject/UserId";
import { UserName } from "../../domain/user/valueObject/UserName";

export class UserApplicationService {
  constructor(
    private userRepository: IUserRepository,
    private userService: UserService
  ) {}

  async createUser(id: UserId, email: string, name: UserName): Promise<User> {
    const newUser = new User(id, name, email);
    const createdUser = await this.userRepository.create(newUser);

    return createdUser;
  }

  async getUserById(id: UserId): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  async updateUser(
    id: UserId,
    email: string,
    name: UserName
  ): Promise<User | null> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      return null;
    }

    user.updateEmail(email);
    user.updateName(name);

    return this.userRepository.create(user);
  }

  async deleteUser(id: UserId): Promise<void> {
    return this.userRepository.delete(id);
  }
}
