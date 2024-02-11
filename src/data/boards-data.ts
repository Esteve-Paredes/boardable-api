import { number } from "zod";
import { query } from "../db";

export async function getBoards(boardId: string, userId: number) {
  return (
    await query("SELECT * FROM boardtodo WHERE boardid = $1 AND userid = $2", [
      boardId,
      userId,
    ])
  ).rows;
}

export async function getBoardById(boardId: string) {
  return (await query("SELECT * FROM boards WHERE id = $1", [boardId])).rows[0];
}
