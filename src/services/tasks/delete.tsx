import { taskApi } from "../task-api";

export async function deleteTask(id: number): Promise<void> {
  return await taskApi.delete(`/tasks/${id}`);
}
