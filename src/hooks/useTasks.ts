import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface TaskInterface {
  id: string;
  description: string;
  priority: string;
  done: boolean;
}

const initialState: TaskInterface[] = [
  {
    id: uuidv4(),
    description: 'Ir al gimnasio',
    priority: 'high',
    done: false,
  },
  {
    id: uuidv4(),
    description: 'Limpiar la casa',
    priority: 'low',
    done: true,
  },
  {
    id: uuidv4(),
    description: 'Ir a la compra',
    priority: 'medium',
    done: false,
  },
];

export const useTasks = () => {
  const [tasks, setTasks] = useState<TaskInterface[]>(initialState);

  const changeTaskDone = (id: string) => {
    const taskTochange = tasks.find((task) => {
      return task.id == id;
    })!;

    taskTochange.done = !taskTochange.done;

    setTasks([...tasks]);
  };

  const deleteTask = (id: string) => {
    const todos = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks([...todos]);
  };

  return {
    tasks,
    setTasks,
    changeTaskDone,
    deleteTask,
  };
};
