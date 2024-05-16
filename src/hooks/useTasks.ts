import { useState } from 'react';

export interface TaskInterface {
  id: string;
  description: string;
  priority: string;
  done: boolean;
}

const initialState: TaskInterface[] = [];

export const useTasks = () => {
  const [tasks, setTasks] = useState<TaskInterface[]>(() => {
    const localStorageTasks = localStorage.getItem('tasks');
    return localStorageTasks ? JSON.parse(localStorageTasks) : initialState;
  });

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
