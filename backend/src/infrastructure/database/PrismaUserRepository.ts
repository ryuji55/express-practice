import { PrismaClient } from "@prisma/client";
import { UserRepository } from "../../domain/user/repositories/UserRepository";
import { User } from "../../domain/user/entities/User";

export class PrismaUserRepository implements UserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(user: User): Promise<User> {
    const createUser = await this.prisma.user.create({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
    return new User(createUser.id, createUser.name, createUser.email);
  }

  async findById(id: string): Promise<User | null> {
    const foundUser = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    return foundUser
      ? new User(foundUser.id, foundUser.name, foundUser.email)
      : null;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
