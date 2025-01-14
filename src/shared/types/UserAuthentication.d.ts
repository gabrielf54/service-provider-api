declare interface UserAuthentication {
  id: number;
  email: string;
  passwordHash: string;
  refreshToken: string;
  user: User;
  createdAt: Date;
}
