import * as BoardsDB from "../data/boards-data";

export async function getBoards(boardId: string, userId: number | undefined) {
  if (typeof userId === "number") {
    return await BoardsDB.getBoards(boardId, userId);
  }
  return;
}

export async function getBoardById(boardId: string) {
  return await BoardsDB.getBoardById(boardId);
}
