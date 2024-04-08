import express from "express";
import { authenticateHandler } from "../middleware/authenticate";
import { getMyBoards, postNewMyBoard } from "../services/my-boards-services";

const myBoardsRouter = express.Router();

myBoardsRouter.get("/", authenticateHandler, async (req, res, next) => {
  try {
    const { id } = req.headers;
    const dataBoards = await getMyBoards(Number(id));
    res.json({
      ok: true,
      data: dataBoards,
    });
  } catch (error) {
    next(error);
  }
});

myBoardsRouter.post("/", authenticateHandler, async (req, res, next) => {
  try {
    const { body, userId } = req;
    const newBoard = await postNewMyBoard(body, userId);
    res.json({
      ok: true,
      data: newBoard,
    });
  } catch (error) {
    next(error);
  }
});

export default myBoardsRouter;
