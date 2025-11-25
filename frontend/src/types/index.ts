export interface Task {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
  createdAt: Date | string;
}

export interface CreateTaskDTO {
  title: string;
  description: string;
}

export interface UpdateTaskDTO extends Partial<CreateTaskDTO> {
  isDone?: boolean;
}
