"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TaskForm } from "./task-form/task-form";
import { TaskProps } from "@/services/tasks/get";

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  task: TaskProps;
  refethTasks: () => void;
}

export default function TaskModal({
  isOpen,
  onClose,
  task,
  refethTasks,
}: TaskModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {task ? "Editar Tarea" : "Crear Nueva Tarea"}
          </DialogTitle>
        </DialogHeader>
        <TaskForm refethTasks={refethTasks} onClose={onClose} task={task} />
      </DialogContent>
    </Dialog>
  );
}
