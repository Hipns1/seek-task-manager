"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TaskModal from "./modal-task";
import { GetTasks, TaskProps } from "@/services/tasks/get";
import { MdDelete, MdEdit } from "react-icons/md";
import { Spinner } from "@/components/ui/spinner";
import { deleteTask } from "@/services/tasks/delete";
import { toast } from "react-toastify";
import { FORM_ERRORS_MSGS } from "@/lib/consts";

interface Task {
  id?: number;
  title: string;
  status: string;
}

export default function TaskList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState<Task | undefined>(undefined);

  const { data: tasks, mutate: refethTasks, isLoading } = GetTasks();

  const openModal = (task?: Task) => {
    setCurrentTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentTask(undefined);
    setIsModalOpen(false);
  };

  const deleteTaskFn = async (id: number | undefined) => {
    await deleteTask(id as number)
      .then(() => {
        refethTasks();
        toast.success(FORM_ERRORS_MSGS.DELETE_TASK);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="space-y-4">
        <Button onClick={() => openModal()}>Agregar Tarea</Button>
        <Card>
          {!isLoading ? (
            tasks?.map((task: TaskProps) => (
              <CardContent
                className="flex justify-between shadow-sm items-center  p-2 rounded-md"
                key={task.id}
              >
                <div>
                  <h3 className="font-semibold capitalize">{task.title}</h3>
                  <p className="text-sm text-gray-500">Estado: {task.status}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openModal(task)}
                  >
                    <MdEdit />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => deleteTaskFn(task?.id)}
                  >
                    <MdDelete />
                  </Button>
                </div>
              </CardContent>
            ))
          ) : (
            <div className="w-full flex justify-center items-center py-40">
              <Spinner />
            </div>
          )}
        </Card>
      </div>

      <TaskModal
        isOpen={isModalOpen}
        onClose={closeModal}
        task={currentTask as TaskProps}
        refethTasks={refethTasks}
      />
    </>
  );
}
