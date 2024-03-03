import * as BoardsDB from "../data/boards-data";
import { tasklist } from "../models/task-list";

export async function getBoards(boardId: string, userId: number | undefined) {
  if (typeof userId === "number") {
    return await BoardsDB.getBoards(boardId, userId);
  }
  return;
}

export async function getBoardById(boardId: string) {
  return await BoardsDB.getBoardById(boardId);
}

export async function postNewList(
  userId: string,
  boardId: string,
  title: string
): Promise<tasklist> {
  return await BoardsDB.postNewList(userId, boardId, title);
}

export async function updateBoard(boardId: string, data: string) {
  return await BoardsDB.updateBoard(boardId, data);
}

export async function deleteBoard(boardId: string) {
  return await BoardsDB.deleteBoard(boardId);
}
