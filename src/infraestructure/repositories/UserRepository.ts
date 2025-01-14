export class UserRepository implements IUserRepository {
  findByEmail(email: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  findById(id: number): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
  save(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
