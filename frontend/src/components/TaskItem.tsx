import { Trash2, CheckCircle, Circle, Edit2 } from "lucide-react";
import type { Task } from "../types";

interface TaskItemProps {
  task: Task;
  onToggle: (task: Task) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

export function TaskItem({ task, onToggle, onDelete, onEdit }: TaskItemProps) {
  return (
    <div
      className={`group p-4 rounded-lg flex items-start justify-between gap-4 transition-all border border-zinc-700/50 
      ${
        task.isDone
          ? "bg-zinc-900/50 opacity-60"
          : "bg-zinc-800 hover:border-zinc-600"
      }`}
    >
      <button
        onClick={() => onToggle(task)}
        className="mt-1 text-blue-500 hover:text-blue-400 transition-colors"
        title={task.isDone ? "Marcar como pendente" : "Concluir tarefa"}
      >
        {task.isDone ? <CheckCircle size={24} /> : <Circle size={24} />}
      </button>

      <div className="flex-1 min-w-0">
        <h3
          className={`font-semibold text-lg truncate ${
            task.isDone ? "line-through text-zinc-500" : "text-zinc-100"
          }`}
        >
          {task.title}
        </h3>
        {task.description && (
          <p
            className={`text-sm mt-1 wrap-break-word ${
              task.isDone ? "text-zinc-600" : "text-zinc-400"
            }`}
          >
            {task.description}
          </p>
        )}
      </div>

      <div className="flex gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => onEdit(task)}
          className="text-zinc-400 hover:text-blue-400 p-2 hover:bg-zinc-700/50 rounded transition-colors"
          title="Editar"
        >
          <Edit2 size={18} />
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-zinc-400 hover:text-red-400 p-2 hover:bg-zinc-700/50 rounded transition-colors"
          title="Excluir"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}
