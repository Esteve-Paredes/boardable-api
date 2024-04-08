import express from "express";
import { authenticateHandler } from "../middleware/authenticate";
import {
  deleteBoard,
  getBoardById,
  getBoards,
  postNewList,
  updateBoard,
} from "../services/boards-services";

const boardsRouter = express.Router();

boardsRouter.get("/:id", authenticateHandler, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userId } = req;
    const boardData = await getBoards(id, userId);
    const board = await getBoardById(id);
    res.json({
      ok: true,
      data: {
        boardData: boardData,
        title: board.title,
        color: board.color,
      },
    });
  } catch (error) {
    next(error);
  }
});

boardsRouter.post("/:id", authenticateHandler, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userId } = req;
    const { title } = req.body;
    const newList = await postNewList(userId, id, title);
    res.json({
      ok: true,
      data: newList,
    });
  } catch (error) {
    next(error);
  }
});

boardsRouter.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const newTitle = await updateBoard(id, title);
    res.json({
      ok: true,
      data: newTitle,
    });
  } catch (error) {
    next(error);
  }
});

boardsRouter.delete("/:id", authenticateHandler, async (req, res, next) => {
  try {
    const { id } = req.params;
    const boardDelete = await deleteBoard(id);
    res.json({
      ok: true,
      data: boardDelete,
    });
  } catch (error) {
    next(error);
  }
});

export default boardsRouter;
