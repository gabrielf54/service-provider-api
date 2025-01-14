import { User } from "@shared/types/User";

declare interface IUserRepository {
  findById(id: number): Promise<User | null>;
  findAll(): Promise<User[]>;
  findByEmail(email: string): Promise<User | null>;
  save(user: User): Promise<User>;
  update(user: User): Promise<boolean>;
  delete(id: number): Promise<boolean>;
}
