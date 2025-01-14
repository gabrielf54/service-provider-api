import { User } from "./User";

declare interface ServiceProvider {
  id: number;
  bio: string;
  yearsExperience: number;
  profilePicture: string;
  user: User;
  deletedAt: Date | null;
  createdAt: Date;
}

