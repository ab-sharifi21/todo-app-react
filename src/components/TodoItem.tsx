import { IoTrashOutline } from 'react-icons/io5';
import { TaskInterface } from '../App';
import { useEffect, useState } from 'react';


interface Props {
    task: TaskInterface,
    tasks: TaskInterface[],
    setTasks: (tasks: TaskInterface[]) => void,
}

export function TodoItem({ task, tasks, setTasks }: Props) {

    const { id, description, done, priority } = task;

    const [color, setColor] = useState('');

    const changeColor = (): void => {
        priority === 'high' && setColor('bg-orange-500');
        priority === 'low' && setColor('bg-yellow-300');
        priority === 'medium' && setColor('bg-green-500');
    }


    const changeTaskDone = (id: string) => {
        const taskTochange = tasks.find((task) => {
            return task.id == id
        })!;

        taskTochange.done = !taskTochange.done;

        setTasks([ ...tasks ])

    }

    const deleteTask = (id: string) => {
        const todos = tasks.filter((task) => {
            return task.id !== id;
        })

        setTasks([...todos])
    }

    useEffect(() => {
        changeColor();
    });

    return (
        <li className='flex items-center gap-2 justify-between'>

            <div className='flex items-center gap-2'>
                <input
                    type="checkbox"
                    className="w-4 h-4 rounded-xl checked:bg-blue-400 checked:border-transparent"
                    checked={ done }
                    onChange={ () => changeTaskDone(id) }
                />

                <p
                    className={`${ done ? 'line-through' : 'none' } ${color} m-2 px-3 rounded-2xl text-white`}
                >{ description }</p>
            </div>

            <IoTrashOutline
                onClick={ () => deleteTask(id) }
            />

        </li>
    );
}
