import { number } from "zod";
import * as taskData from "../data/tasks-data";

export async function getAllTasks(
  userId: number | undefined,
  boardId: string | any,
  taskid: string | any
) {
  if (userId) {
    return await taskData.getAllTasks(userId.toString(), boardId, taskid);
  }
}

export async function postTask(
  userId: number | undefined,
  boardId: string | any,
  taskid: string | any,
  title: string
) {
  if (userId) {
    return await taskData.postTask(userId.toString(), boardId, taskid, title);
  }
}

export async function updateTask(taskid: string, title: string) {
  return await taskData.updateTask(taskid, title);
}

export async function deleteTask(taskid: string | any) {
  if (taskid && !Array.isArray(taskid)) {
    return await taskData.deleteTask(taskid);
  }
}
