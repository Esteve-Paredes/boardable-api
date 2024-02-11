import * as BoardsDB from "../data/my-boards-data";
import { boardData } from "../models/boards";

export async function getMyBoards(userID: number) {
  return await BoardsDB.getMyBoards(userID);
}

export async function postNewMyBoard(boardData: boardData) {
  return await BoardsDB.postNewMyBoard(boardData);
}
