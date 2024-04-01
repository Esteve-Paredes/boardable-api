import { query } from "../db";

export async function getAllTasks(
  userId: string,
  boardId: string,
  taskid: string
) {
  return (
    await query(
      "SELECT * FROM tasks WHERE boardid = $1 AND userid = $2 AND tasklistId = $3",
      [boardId, userId, taskid]
    )
  ).rows;
}

export async function postTask(
  userId: string,
  boardId: string,
  taskid: string,
  title: string
) {
  return (
    await query(
      "INSERT INTO tasks (userid, boardid, tasklistId, title) VALUES ($1, $2, $3, $4) RETURNING *",
      [userId, boardId, taskid, title]
    )
  ).rows[0];
}

export async function updateTask(taskid: string, title: string) {
  return await query("UPDATE tasks SET title = $1 WHERE id = $2", [
    title,
    taskid,
  ]);
}

export async function deleteTask(taskid: string) {
  return (await query("DELETE FROM tasks WHERE id = $1", [taskid])).rows;
}
