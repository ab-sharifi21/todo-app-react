import { useState } from 'react';
import { TaskInterface } from '../App';
import { v4 as uuidv4 } from 'uuid';

interface Props {
    tasks: TaskInterface[],
    setTasks: (tasks: TaskInterface[]) => void,
}

export function AddTask({ tasks, setTasks }: Props) {

    const [taskText, setTaskText] = useState({
        text: '',
        priority: '',
    });

    // const handleChange = (event) => {
    //     setTaskText(event.target.value)
    // }

    const handleFormChange = (event) => {
        setTaskText({
            ...taskText,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const newTask: TaskInterface = {
            id: uuidv4(),
            description: taskText.text,
            done: false,
            priority: taskText.priority
        }

        setTasks([
            ...tasks,
            newTask
        ])


        setTaskText({
            text: '',
            priority: ''
        })
    }

    return (
        <form
            className='flex flex-col gap-3'
            onSubmit={handleSubmit}
        >

            <input
                className="py-2 px-3 outline-none rounded-md caret-orange-500"
                type="text"
                placeholder="New Task"
                name='text'
                value={taskText.text}
                onChange={ handleFormChange }
            />

            <select
                value={taskText.priority}
                name="priority"
                className='bg-slate-600 py-2 px-3 outline-none rounded-md text-slate-50'
                onChange={ handleFormChange }
            >
                <option value="" disabled >Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <button
                className="bg-slate-600 text-white py-2 px-3 rounded-md active:scale-x-95"
                type="submit">Add Task</button>
        </form>
    );
}

