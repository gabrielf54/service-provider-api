declare interface User {
  id: number;
  name: string;
  document: string;
  phone: string;
  auth: UserAuthentication;
  userType: "client" | "provider";
  deletedAt: Date | null;
  createdAt: Date;
}
