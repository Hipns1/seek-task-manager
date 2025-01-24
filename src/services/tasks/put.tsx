import { taskApi } from "../task-api";
import { TaskProps } from "./get";

export async function putTask(id: number, data: TaskProps): Promise<TaskProps> {
  return await taskApi.put(`/tasks/${id}`, data);
}
