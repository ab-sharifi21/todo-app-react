import { useState } from 'react';
import { TaskInterface } from '../hooks/useTasks';
import { v4 as uuidv4 } from 'uuid';

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
    <form className="flex flex-col gap-3 items-center justify-center" onSubmit={handleSubmit}>
      <select
        value={formData.priority}
        name="priority"
        className="bg-[#eb5e28] py-2 px-3 outline-none rounded-2xl text-slate-50 w-full"
        onChange={handleFormChange}
      >
        <option value="" disabled>
          Priority
        </option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <div className="w-full relative flex flex-col">
        <input
          className="py-2 px-3 outline-none rounded-2xl caret-orange-500"
          type="text"
          placeholder="New Task"
          name="text"
          value={formData.text}
          onChange={handleFormChange}
        />

        <button
          className="bg-[#eb5e28] text-white px-2 h-10 w-20 rounded-2xl absolute right-0"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
}
