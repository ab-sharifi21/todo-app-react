import { TodoItem } from '.';
import { TaskInterface } from '../hooks/useTasks';

interface Props {
  tasks: TaskInterface[];
  changeTaskDone: (id: string) => void;
  deleteTask: (id: string) => void;
}

export function TodoList({ tasks, changeTaskDone, deleteTask }: Props) {
  return (
    <ul className="text-slate-800 font-sans text-lg w-full">
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
