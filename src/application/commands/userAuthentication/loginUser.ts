import { UserRepository } from "src/infraestructure/repositories/UserRepository";

export async function loginUser(
  email: string,
  password: string
): Promise<User> {
  const userRepository = new UserRepository();
  const user = await userRepository.findByEmail(email);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}
