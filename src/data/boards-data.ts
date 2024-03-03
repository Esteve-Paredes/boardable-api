import { number } from "zod";
import { query } from "../db";
import { tasklist } from "../models/task-list";

export async function getBoards(boardId: string, userId: number) {
  return (
    await query("SELECT * FROM tasklist WHERE boardid = $1 AND userid = $2", [
      boardId,
      userId,
    ])
  ).rows;
}

export async function getBoardById(boardId: string) {
  return (await query("SELECT * FROM boards WHERE id = $1", [boardId])).rows[0];
}

export async function postNewList(
  userId: string,
  boardId: string,
  title: string
): Promise<tasklist> {
  return (
    await query(
      "INSERT INTO tasklist (userid, boardid, title) VALUES ($1, $2, $3) RETURNING *",
      [userId, boardId, title]
    )
  ).rows[0];
}

export async function updateBoard(boardId: string, data: string) {
  return await query("UPDATE boards SET title = $1 WHERE id = $2", [
    data,
    boardId,
  ]);
}

export async function deleteBoard(boardId: string) {
  return (await query("DELETE FROM boards WHERE id = $1", [boardId])).rows;
}
