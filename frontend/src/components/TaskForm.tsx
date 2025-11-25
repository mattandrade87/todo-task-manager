import { useState } from "react";
import { PlusCircle, X, Save } from "lucide-react";
import type { Task } from "../types";

interface TaskFormProps {
  onSave: (title: string, description: string) => Promise<void>;
  editingTask: Task | null;
  onCancelEdit: () => void;
}

export function TaskForm({ onSave, editingTask, onCancelEdit }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(
    editingTask?.description || ""
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    await onSave(title, description);

    if (!editingTask) {
      setTitle("");
      setDescription("");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-800 p-4 rounded-lg mb-8 shadow-lg border border-zinc-700"
    >
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Título da tarefa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-zinc-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-zinc-400"
          autoFocus
        />
        <textarea
          placeholder="Descrição (opcional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-zinc-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none placeholder:text-zinc-400"
        />

        <div className="flex gap-2">
          <button
            type="submit"
            disabled={!title.trim()}
            className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-colors"
          >
            {editingTask ? <Save size={20} /> : <PlusCircle size={20} />}
            {editingTask ? "Salvar Alterações" : "Criar Tarefa"}
          </button>

          {editingTask && (
            <button
              type="button"
              onClick={onCancelEdit}
              className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-colors"
            >
              <X size={20} />
              Cancelar
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
