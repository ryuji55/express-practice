import { v4 as uuidv4 } from "uuid";
import { UserName } from "../valueObject/UserName";
import { UserId } from "../valueObject/UserId";

export class UserFactory {
  create(name: UserName, email: string): User {
    const id = new UserId(uuidv4());
    return new User(id, name, email);
  }
}

export class User {
  constructor(
    public id: UserId,
    public name: UserName,
    public email: string
  ) {}

  updateEmail(newEmail: string): void {
    // 　バリデーションはここに書く
    this.email = newEmail;
  }

  updateName(newName: UserName): void {
    // バリデーションはここに書く
    this.name = newName;
  }
}
