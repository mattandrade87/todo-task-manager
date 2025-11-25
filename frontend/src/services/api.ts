import axios from "axios";
import type { Task, CreateTaskDTO, UpdateTaskDTO } from "../types";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const taskService = {
  getAll: async (): Promise<Task[]> => {
    const response = await api.get<Task[]>("/tasks");
    return response.data;
  },
  create: async (data: CreateTaskDTO): Promise<Task> => {
    const response = await api.post<Task>("/tasks", data);
    return response.data;
  },
  update: async (id: string, data: UpdateTaskDTO): Promise<Task> => {
    const response = await api.patch<Task>(`/tasks/${id}`, data);
    return response.data;
  },
  delete: async (id: string): Promise<void> => {
    await api.delete<void>(`/tasks/${id}`);
  },
};
