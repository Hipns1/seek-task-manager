import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Task, taskSchema } from './task-schema'
import { postTask } from '@/services/tasks/post'
import { TaskProps } from '@/services/tasks/get'
import { putTask } from '@/services/tasks/put'

interface UseTaskSFormProps {
	refethTasks: () => void;
	onClose: () => void;
	task?: TaskProps;
}

export const useTaskSForm = ({ refethTasks, onClose, task }: UseTaskSFormProps) => {
	const [isLoading, setIsLoading] = useState(false)

	const form = useForm<Task>({
		resolver: zodResolver(taskSchema),
	})

	const onSuccess = async (data: Task): Promise<void> => {
		setIsLoading(true)
		if (task) {
			await putTask(task.id as number, data).then(() => {
				onClose()
				refethTasks()
			}).catch((err) =>
				console.log(err)
			)
		} else {
			await postTask(data).then(() => {
				onClose()
				refethTasks()
			}).catch((err) =>
				console.log(err)
			)
			setIsLoading(false)
		}

	}

	return {
		form,
		isLoading,
		onSuccess
	}
}
