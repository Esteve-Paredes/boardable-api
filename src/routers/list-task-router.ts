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
      const { taskid } = req.headers;
      if (taskid) {
        const deleteListT = await deleteListTask(taskid.toString());
        res.json({
          ok: true,
          data: `Task ${taskid} eliminado`,
        });
      }
    } catch (error) {
      next(error);
    }
  }
);

export default listTaskRouter;
