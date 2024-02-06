import bycrypt from "bcrypt";
import * as userDB from "../data/auth-data";

export async function createUser(userData) {
  const { username, password } = userData;

  const costFactor = 4;
  const hashedPassword = await bycrypt.hash(password, costFactor);
  return await userDB.createUser(username, hashedPassword);
}
