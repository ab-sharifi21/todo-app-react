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
    priority === 'low' && setColor('text-yellow1');
    priority === 'high' && setColor('text-red1');
    priority === 'medium' && setColor('text-green1');
    done && setColor('text-slate-500');
  };

  useEffect(() => {
    changeColor();
  });

  return (
    <li className="flex items-center gap-2 justify-between w-full">
      <div className="flex items-center gap-2">
        <input
          data-testid="todo-checkbox"
          type="checkbox"
          className="w-4 h-4 rounded-xl checked:bg-blue-400 checked:border-transparent"
          checked={done}
          onChange={() => changeTaskDone(id)}
        />

        <p
          className={`${done ? 'line-through' : 'none'} ${color} m-2 px-3 rounded-2xl`}
        >
          {description}
        </p>
      </div>

      <div className="flex gap-3 items-center">
        <CiEdit className="text-white text-xl cursor-pointer hover:scale-125" />

        <IoTrashOutline
          data-testid="delete-icon"
          className="text-[#f14444] hover:scale-125 cursor-pointer"
          onClick={() => deleteTask(id)}
        />
      </div>
    </li>
  );
}
