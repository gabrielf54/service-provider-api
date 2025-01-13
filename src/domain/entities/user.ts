import { UserAuthentication } from "@shared/types/UserAuthenticationTypes";
import { User } from "@shared/types/UserTypes";

export class Users {
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
