import * as BoardsDB from "../data/boards-data";

export async function getBoards(userID: number) {
  return await BoardsDB.getBoards(userID);
}
