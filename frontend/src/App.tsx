import "./App.css";
import { useEffect, useMemo, useState } from "react";
import type { Task } from "./types";
import { taskService } from "./services/api";
import { TaskForm } from "./components/TaskForm";
import { TaskItem } from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const data = await taskService.getAll();
      const sorted = data.sort((a, b) => {
        if (a.isDone === b.isDone) {
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        }
        return a.isDone ? 1 : -1;
      });
      setTasks(sorted);
    } catch (error) {
      console.error("Falha ao carregar tarefas:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveTask = async (title: string, description: string) => {
    try {
      if (editingTask) {
        await taskService.update(editingTask.id, { title, description });
        setEditingTask(null);
      } else {
        await taskService.create({ title, description });
      }
      await loadTasks();
    } catch (error) {
      console.error("Falha ao salvar tarefa:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Tem certeza que deseja excluir esta tarefa?")) {
      try {
        await taskService.delete(id);
        setTasks((prev) => prev.filter((task) => task.id !== id));
      } catch (error) {
        console.error("Erro ao deletar:", error);
      }
    }
  };

  const handleToggleDone = async (task: Task) => {
    try {
      const updatedStatus = !task.isDone;
      setTasks((prev) =>
        prev.map((t) =>
          t.id === task.id ? { ...t, isDone: updatedStatus } : t
        )
      );

      await taskService.update(task.id, { isDone: updatedStatus });
      loadTasks();
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
      loadTasks();
    }
  };

  const sortedTasks = useMemo(() => {
    return [...tasks].sort((a, b) => {
      if (a.isDone === b.isDone) {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }
      return a.isDone ? 1 : -1;
    });
  }, [tasks]);

  return (
    <div className="min-h-screen text-zinc-100 p-4 md:p-8 font-sans">
      <div className="max-w-2xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-5xl font-semibold text-blue-500 mb-2">
            Todo List
          </h1>
          <p className="text-white text-lg">Gerencie suas tarefas diárias</p>
        </header>

        <TaskForm
          onSave={handleSaveTask}
          editingTask={editingTask}
          onCancelEdit={() => setEditingTask(null)}
        />

        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm text-gray-100 px-1">
            <span>
              Tarefas criadas:{" "}
              <strong className="text-white">{tasks.length}</strong>
            </span>
            <span>
              Concluídas:{" "}
              <strong className="text-white">
                {tasks.filter((t) => t.isDone).length}
              </strong>
            </span>
          </div>

          {isLoading ? (
            <div className="text-center py-10 text-zinc-500 animate-pulse">
              Carregando tarefas...
            </div>
          ) : tasks.length > 0 ? (
            <div className="space-y-3">
              {sortedTasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onToggle={handleToggleDone}
                  onDelete={handleDelete}
                  onEdit={setEditingTask}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 border-t border-zinc-800 rounded-lg">
              <p className="text-zinc-500 text-lg">
                Você ainda não tem tarefas cadastradas
              </p>
              <p className="text-zinc-600 text-sm mt-2">
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
