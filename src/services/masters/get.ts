import useSWR from "swr";

export const GetMasterTasksStatus = () => {
	const { data, error, mutate, isValidating, isLoading } = useSWR("/taskStatus");
	return { data, error, mutate, isValidating, isLoading };
};