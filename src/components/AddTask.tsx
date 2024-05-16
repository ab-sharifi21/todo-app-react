import { useState } from 'react';
import { TaskInterface } from '../hooks/useTasks';
import { v4 as uuidv4 } from 'uuid';
import { FaPlus } from 'react-icons/fa';

interface Props {
  tasks: TaskInterface[];
  setTasks: (tasks: TaskInterface[]) => void;
}

export function AddTask({ tasks, setTasks }: Props) {
  const [formData, setFormData] = useState({
    text: '',
    priority: '',
  });

  const handleFormChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (formData.text.length < 2) {
      return;
    }

    const newTask: TaskInterface = {
      id: uuidv4(),
      description: formData.text,
      done: false,
      priority: formData.priority,
    };

    setTasks([...tasks, newTask]);

    setFormData({
      text: '',
      priority: '',
    });
  };

  return (
    <form className="flex gap-5" onSubmit={handleSubmit}>
      <select
        value={formData.priority}
        name="priority"
        className="bg-[#F5C61C] px-4 outline-none rounded-md text-black text-sm font-semibold"
        onChange={handleFormChange}
      >
        <option value="" disabled>
          Priority
        </option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <div className="flex gap-2">
        <input
          className="py-2 px-4 outline-none rounded-md placeholder:text-sm text-sm font-semibold"
          type="text"
          placeholder="New Task"
          name="text"
          value={formData.text}
          onChange={handleFormChange}
        />

        <button
          className="text-white hover:scale-x-125 duration-300 hover:text-[#F5C61C]"
          type="submit"
        >
          <FaPlus className='h-6 w-6' />
        </button>
      </div>
    </form>
  );
}
