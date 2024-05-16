import { TodoItem } from '.';
import { TaskInterface } from '../hooks/useTasks';

interface Props {
  tasks: TaskInterface[];
  changeTaskDone: (id: string) => void;
  deleteTask: (id: string) => void;
}

export function TodoList({ tasks, changeTaskDone, deleteTask }: Props) {
  return (
    <ul className="">
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
