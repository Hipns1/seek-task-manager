import { taskApi } from "../task-api";
import { TaskProps } from "./get";

export async function postTask(data: TaskProps): Promise<TaskProps> {
  return await taskApi.post(`/tasks`, data);
}
