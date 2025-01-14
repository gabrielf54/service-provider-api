
export class UserEntity {
  id: number | undefined;
  name: string | undefined;
  document: string | undefined;
  phone: string | undefined;
  auth: UserAuthentication | undefined;
  userType: "client" | "provider" | undefined;
  deletedAt: Date | undefined;
  createdAt: Date | undefined;

  constructor(user: User) {
    Object.assign(this, user);
  }
}
