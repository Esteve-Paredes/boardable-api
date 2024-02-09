import express from "express";
import { authenticateHandler } from "../middleware/authenticate";
import { getBoards } from "../services/boards-services";

const boardsRouter = express.Router();

boardsRouter.get("/", authenticateHandler, async (req, res, next) => {
  try {
    const dataBoards = await getBoards(Number(req.headers.id));
    console.log(dataBoards);
    res.json({
      ok: true,
      data: dataBoards,
    });
  } catch (error) {
    next(error);
  }
});

export default boardsRouter;
