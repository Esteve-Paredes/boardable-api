import express from "express";
import { authenticateHandler } from "../middleware/authenticate";
import {
  deleteListTask,
  editTitleListTask,
} from "../services/list-task-services";

const listTaskRouter = express.Router();

listTaskRouter.patch(
  "/:id/listtask",
  authenticateHandler,
  async (req, res, next) => {
    try {
      const { title, taskId } = req.body;
      const titleListTask = await editTitleListTask(title, taskId);
      res.json({
        ok: true,
        data: titleListTask,
      });
    } catch (error) {
      next(error);
    }
  }
);

listTaskRouter.delete(
  "/:id/listtask",
  authenticateHandler,
  async (req, res, next) => {
    try {
      const { listTask } = req.query;
      if (listTask) {
        const deleteListT = await deleteListTask(listTask.toString());
        res.json({
          ok: true,
          data: deleteListT,
        });
      }
    } catch (error) {
      next(error);
    }
  }
);

export default listTaskRouter;
