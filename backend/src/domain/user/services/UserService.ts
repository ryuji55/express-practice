import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async createUser(
    id: string,
    name: string | null,
    email: string
  ): Promise<User> {
    const user = new User(id, name, email);
    return this.userRepository.create(user);
  }
}
