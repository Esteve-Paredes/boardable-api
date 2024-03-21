import { query } from "../db";

export async function editTitleListTask(title: string, taskid: string) {
  return await query("UPDATE tasklist SET title = $1 WHERE id = $2", [
    title,
    taskid,
  ]);
}

export async function deleteListTask(listTaskId: string) {
  return (await query("DELETE FROM tasklist WHERE id = $1", [listTaskId])).rows;
}
