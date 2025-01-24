import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { InputField } from "@/components/ui/form-fields/input-field";
import { useTaskSForm } from "./use-task-form";
import { Spinner } from "@/components/ui/spinner";
import { SelectField } from "@/components/ui/form-fields/select-field";
import { GetMasterTasksStatus } from "@/services/masters/get";
import { TaskProps } from "@/services/tasks/get";
import { useEffect } from "react";

interface TaskFormProps {
  refethTasks: () => void;
  onClose: () => void;
  task?: TaskProps;
}

export const TaskForm = ({ refethTasks, onClose, task }: TaskFormProps) => {
  const { form, isLoading, onSuccess } = useTaskSForm({
    refethTasks,
    onClose,
    task,
  });
  const { control, handleSubmit, setValue } = form;

  const { data: masterTasksStatus } = GetMasterTasksStatus();

  useEffect(() => {
    if (task) {
      setValue("title", task.title);
      setValue("status", task.status);
    }
  }, [task]);

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSuccess)} className="w-full">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="flex w-full flex-col gap-2">
            <InputField
              control={control}
              label="Usuario"
              name="title"
              type="text"
              placeholder="Ingrese el titulo de la tarea"
            />
            <SelectField
              options={masterTasksStatus}
              control={control}
              name="status"
              label="Estado"
              placeholder="Selecciona el estado"
            />
          </div>
          <Button
            type="submit"
            className="mt-4 flex w-full gap-2 sm:mt-10 xl:mt-16"
            variant="secondary"
          >
            {isLoading && <Spinner />}
            <span className="text-sm font-semibold">Enviar</span>
          </Button>
        </div>
      </form>
    </Form>
  );
};
