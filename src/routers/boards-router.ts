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
    const boardData = await getBoards(req.params.id, req.userId);
    const board = await getBoardById(req.params.id);
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
    const title = req.body.title;
    if (req.userId) {
      const userId = req.userId.toString();
      const newList = await postNewList(userId, req.params.id, title);
      res.json({
        ok: true,
        data: newList,
      });
    }
  } catch (error) {
    next(error);
  }
});

boardsRouter.patch("/:id", async (req, res, next) => {
  try {
    const newTitle = await updateBoard(req.params.id, req.body.title);
    console.log(newTitle);
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
    const boardDelete = await deleteBoard(req.params.id);
    console.log(boardDelete);
    res.json({
      ok: true,
      data: boardDelete,
    });
  } catch (error) {
    next(error);
  }
});

export default boardsRouter;
