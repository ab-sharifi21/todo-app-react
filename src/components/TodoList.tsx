import { TodoItem } from '.';
import { TaskInterface } from '../hooks/useTasks';

interface Props {
  tasks: TaskInterface[];
  changeTaskDone: (id: string) => void;
  deleteTask: (id: string) => void;
}

export function TodoList({ tasks, changeTaskDone, deleteTask }: Props) {
  return (
    <ul className="font-sans bg-[#403D3933] shadow-box-shadow py-4 px-6 space-y-1 rounded-md">
      {tasks.map((task: TaskInterface) => {
        return (
          <TodoItem
            key={task.id}
            task={task}
            changeTaskDone={changeTaskDone}
            deleteTask={deleteTask}
          />
        );
      })}
    </ul>
  );
}
