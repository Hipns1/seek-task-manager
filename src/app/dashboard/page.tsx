import TaskList from "@/components/app/dashboard/task-list";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Panel de Tareas</h1>
        <Link href="/">
          <Button variant="outline">Cerrar sesión</Button>
        </Link>
      </header>
      <TaskList />
    </div>
  );
}
