import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { InputField } from "@/components/ui/form-fields/input-field";
import { Spinner } from "@/components/ui/spinner";
import { useLoginForm } from "./use-login-form";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const router = useRouter();
  const { form, isLoading, onSuccess } = useLoginForm({ router });
  const { control, handleSubmit } = form;

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSuccess)} className="w-full">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="flex w-full flex-col gap-2">
            <InputField
              control={control}
              label="Usuario"
              name="user"
              type="text"
              placeholder="Ingrese su usuario"
            />
            <InputField
              control={control}
              label="Contraseña"
              name="password"
              type="password"
              placeholder="Ingrese su contraseña"
            />
          </div>
          <Button
            type="submit"
            className="mt-8 flex w-full gap-2 sm:mt-10 xl:mt-16"
            variant="secondary"
          >
            {isLoading && <Spinner />}
            <span className="text-sm font-semibold">Iniciar sesión</span>
          </Button>
        </div>
      </form>
    </Form>
  );
};
