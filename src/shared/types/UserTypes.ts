import { UserAuthentication } from "./UserAuthenticationTypes";

export interface User {
  id: number;
  name: string;
  document: string;
  phone: string;
  auth: UserAuthentication;
  user_type: "client" | "provider";
  deleted_at: Date | null;
  created_at: Date;
}
