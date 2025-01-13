import { User } from "./UserTypes";

export interface ServiceProvider {
  id: number;
  bio: string;
  yearsExperience: number;
  profilePicture: string;
  user: User;
  deletedAt: Date | null;
  createdAt: Date;
}

