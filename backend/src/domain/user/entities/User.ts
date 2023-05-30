import { UserName } from "../valueObject/UserName";
import { UserId } from "../valueObject/UserId";

export class User {
  constructor(public id: UserId, public name: UserName, public email: string) {}

  updateEmail(newEmail: string): void {
    // 　バリデーションはここに書く
    this.email = newEmail;
  }

  updateName(newName: UserName): void {
    // バリデーションはここに書く
    this.name = newName;
  }
}
