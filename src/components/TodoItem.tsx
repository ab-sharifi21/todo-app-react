import { useEffect, useState } from 'react';
import { IoTrashOutline } from 'react-icons/io5';
import { TaskInterface } from '../hooks/useTasks';
import { CiEdit } from 'react-icons/ci';

interface Props {
  task: TaskInterface;
  changeTaskDone: (id: string) => void;
  deleteTask: (id: string) => void;
}

export function TodoItem({ task, changeTaskDone, deleteTask }: Props) {
  const { id, description, done, priority } = task;

  const [color, setColor] = useState('');

  const changeColor = (): void => {
    priority === 'low' && setColor('text-slate-500');
    priority === 'high' && setColor('text-orange-500');
    priority === 'normal' && setColor('text-blue-500');
    done && setColor('text-white/20');
  };

  useEffect(() => {
    changeColor();
  });

  return (
    <li className="justify-between inline-flex w-full items-center space-x-2 rounded-sm border-slate-700 px-2 py-1 transition duration-150 ease-linear border-b hover:bg-white/5">
      <div className="flex items-center">
        <input
          data-testid="todo-checkbox"
          type="checkbox"
          className="w-4 h-4"
          checked={done}
          onChange={() => changeTaskDone(id)}
        />

        <p
          className={`${done ? 'line-through' : 'none'} ${color} px-2 rounded-2xl`}
        >
          {description}
        </p>
      </div>

      <div className="flex gap-2 items-center">
        <CiEdit className="text-white text-xl cursor-pointer hover:scale-125" />

        <IoTrashOutline
          data-testid="delete-icon"
          className="text-orange-600 hover:scale-125 cursor-pointer"
          onClick={() => deleteTask(id)}
        />
      </div>
    </li>
  );
}
