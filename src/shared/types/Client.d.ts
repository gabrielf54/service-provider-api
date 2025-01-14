import { User } from "./User";

declare interface Client {
  id: number;
  address: string;
  birthDate: Date;
  user: User; // Referência a User
  deletedAt: Date | null;
  createdAt: Date;
}
