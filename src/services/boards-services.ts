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

export async function postNewList(
  userId: number | undefined,
  boardId: string,
  title: string
) {
  if (userId) {
    return await BoardsDB.postNewList(userId.toString(), boardId, title);
  }
}

export async function updateBoard(boardId: string, title: string) {
  return await BoardsDB.updateBoard(boardId, title);
}

export async function deleteBoard(boardId: string) {
  return await BoardsDB.deleteBoard(boardId);
}
