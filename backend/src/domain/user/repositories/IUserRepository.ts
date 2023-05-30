import { User } from "../entities/User";
import { UserId } from "../valueObject/UserId";

export interface IUserRepository {
  create(user: User): Promise<User>;
  findById(id: UserId): Promise<User | null>;
  delete(id: UserId): Promise<void>;
}
