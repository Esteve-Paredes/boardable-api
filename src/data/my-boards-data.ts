import { query } from "../db/index";
import { boardCard, boardData } from "../models/boards";

export async function getMyBoards(userID: number) {
  return (await query("SELECT * FROM boards WHERE userid = $1", [userID])).rows;
}

export async function postNewMyBoard(boardData: boardData, userId: string) {
  const { title, color } = boardData;
  return (
    await query(
      "INSERT INTO boards (userid, title, color) VALUES ($1, $2, $3) RETURNING *",
      [userId, title, color]
    )
  ).rows;
}
