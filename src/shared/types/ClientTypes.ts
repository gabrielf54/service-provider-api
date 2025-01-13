import { User } from "./UserTypes";

export interface Client {
  id: number;
  address: string;
  birth_date: Date;
  user: User; // Referência a User
  deleted_at: Date | null;
  created_at: Date;
}
