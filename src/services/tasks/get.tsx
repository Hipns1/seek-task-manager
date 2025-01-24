import useSWR, { SWRResponse } from "swr";

export interface TaskProps {
  id?: number;
  title: string;
  status: string;
}

export function GetTasks(): SWRResponse<TaskProps[]> {
  const { data, error, mutate, isValidating, isLoading } = useSWR("/tasks");
  return { data, error, mutate, isValidating, isLoading };
}
