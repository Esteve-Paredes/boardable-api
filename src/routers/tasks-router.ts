import express from "express";
import { authenticateHandler } from "../middleware/authenticate";
import { deleteTask, getAllTasks, postTask } from "../services/tasks-services";
import { updateTask } from "../data/tasks-data";

const tasksRouter = express.Router();

tasksRouter.get("/:id/task", authenticateHandler, async (req, res, next) => {
  try {
    const { boardId, listTaskId } = req.query;
    const tasks = await getAllTasks(req.userId, boardId, listTaskId);
    res.json({
      ok: true,
      data: tasks,
    });
  } catch (error) {
    next(error);
  }
});

tasksRouter.post("/:id/task", authenticateHandler, async (req, res, next) => {
  try {
    const { boardId, tasklistId, title } = req.body;
    const tasks = await postTask(req.userId, boardId, tasklistId, title);
    res.json({
      ok: true,
      data: tasks,
    });
  } catch (error) {
    next(error);
  }
});

tasksRouter.patch("/:id/task", authenticateHandler, async (req, res, next) => {
  try {
    const { taskId, title } = req.body;
    const editTask = await updateTask(taskId, title);
    res.json({
      ok: true,
      data: editTask,
    });
  } catch (error) {
    next(error);
  }
});

tasksRouter.delete("/:id/task", authenticateHandler, async (req, res, next) => {
  try {
    const { taskId } = req.query;
    const tasksDelete = await deleteTask(taskId);
    res.json({
      ok: true,
      data: tasksDelete,
    });
  } catch (error) {
    next(error);
  }
});

export default tasksRouter;
