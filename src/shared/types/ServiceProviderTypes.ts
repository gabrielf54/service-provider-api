import { User } from "./UserTypes";

export interface ServiceProvider {
  id: number;
  bio: string;
  years_experience: number;
  profile_picture: string;
  user: User;
  deleted_at: Date | null;
  created_at: Date;
}

