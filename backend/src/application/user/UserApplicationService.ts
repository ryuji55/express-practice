import { UserService } from "./../../domain/user/services/UserService";
import { UserRepository } from "../../domain/user/repositories/UserRepository";
import { User } from "../../domain/user/entities/User";

export class UserApplicationService {
  constructor(
    private userRepository: UserRepository,
    private userService: UserService
  ) {}

  async createUser(
    id: string,
    email: string,
    name: string | null
  ): Promise<User> {
    const newUser = new User(id, name, email);
    const createdUser = await this.userRepository.create(newUser);

    return createdUser;
  }

  async getUserById(id: string): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  async updateUser(
    id: string,
    email: string,
    name: string
  ): Promise<User | null> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      return null;
    }

    user.updateEmail(email);
    user.updateName(name);

    return this.userRepository.create(user);
  }

  async deleteUser(id: string): Promise<void> {
    return this.userRepository.delete(id);
  }
}
