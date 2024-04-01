import * as BoardsDB from "../data/my-boards-data";
import { boardData } from "../models/boards";

export async function getMyBoards(userID: number) {
  return await BoardsDB.getMyBoards(userID);
}

export async function postNewMyBoard(
  board: boardData,
  userId: number | undefined
) {
  if (userId) {
    return await BoardsDB.postNewMyBoard(board, userId?.toString());
  }
}
