import { TodoItem } from '.';
import { TaskInterface } from '../App';

interface Props {
    tasks: TaskInterface[],
    setTasks: (tasks: TaskInterface[]) => void,
}

export function TodoList({ tasks, setTasks }: Props) {
    return ( 
        <ul className="text-slate-800 font-sans text-lg">
            {
                tasks.map((task: TaskInterface) => {
                    return <TodoItem key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
                })
            }
        </ul>
     );
}
