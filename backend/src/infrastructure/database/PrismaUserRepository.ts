import { PrismaClient } from "@prisma/client";
import { IUserRepository } from "../../domain/user/repositories/IUserRepository";
import { User } from "../../domain/user/entities/User";
import { UserId } from "../../domain/user/valueObject/UserId";
import { UserName } from "../../domain/user/valueObject/UserName";

export class PrismaUserRepository implements IUserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(user: User): Promise<User> {
    const createUser = await this.prisma.user.create({
      data: {
        id: user.id.getValue(),
        name: user.name.getValue(),
        email: user.email,
      },
    });

    const createUserId = new UserId(createUser.id);
    const createUserName = new UserName(createUser.name);
    return new User(createUserId, createUserName, createUser.email);
  }

  async findById(id: UserId): Promise<User | null> {
    const foundUser = await this.prisma.user.findUnique({
      where: {
        id: id.getValue(),
      },
    });
    return foundUser
      ? new User(
          new UserId(foundUser.id),
          new UserName(foundUser.name),
          foundUser.email
        )
      : null;
  }

  async delete(id: UserId): Promise<void> {
    await this.prisma.user.delete({
      where: {
        id: id.getValue(),
      },
    });
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users.map(
      (user) =>
        new User(new UserId(user.id), new UserName(user.name), user.email)
    );
  }
}
