import bycrypt from "bcrypt";
import * as userDB from "../data/auth-data";
import { User, userParams } from "../models/user";

export async function createUser(userData: userParams): Promise<User> {
  const { username, password } = userData;

  const costFactor = 4;
  const hashedPassword = await bycrypt.hash(password, costFactor);
  return await userDB.createUser(username, hashedPassword);
}
