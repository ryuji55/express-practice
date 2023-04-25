export class User {
  constructor(
    public id: string,
    public name: string | null,
    public email: string
  ) {}

  updateEmail(newEmail: string): void {
    // 　バリデーションはここに書く
    this.email = newEmail;
  }

  updateName(newName: string): void {
    // バリデーションはここに書く
    this.name = newName;
  }
}
