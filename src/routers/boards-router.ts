import express from "express";
import { authenticateHandler } from "../middleware/authenticate";
import { getBoardById, getBoards } from "../services/boards-services";

const boardsRouter = express.Router();

boardsRouter.get("/:id", authenticateHandler, async (req, res, next) => {
  console.log(req.params);
  try {
    const boardData = await getBoards(req.params.id, req.userId);
    const board = await getBoardById(req.params.id);
    res.json({
      ok: true,
      data: {
        boardData: boardData,
        color: board.color,
      },
    });
  } catch (error) {
    next(error);
  }
});

export default boardsRouter;
