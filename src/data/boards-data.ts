import { query } from "../db/index";

export async function getBoards(userID: number) {
  return (await query("SELECT * FROM boards WHERE userid = $1", [userID])).rows;
}
