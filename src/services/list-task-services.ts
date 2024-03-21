import * as listTaskDB from "../data/list-task-data";

export async function editTitleListTask(title: string, taskid: string) {
  return await listTaskDB.editTitleListTask(title, taskid);
}

export async function deleteListTask(listTaskId: string) {
  return await listTaskDB.deleteListTask(listTaskId);
}
