import { useTasks } from './hooks/useTasks';
import { AddTask, TodoList } from './components';
import { useEffect, useState } from 'react';
import { CiBoxList } from 'react-icons/ci';

function App() {
  const { tasks, setTasks, changeTaskDone, deleteTask } = useTasks();
  const [priorityOfTask, setPriorityOfTask] = useState('all');

  const handlePriority = (priority: string) => {
    setPriorityOfTask(priority);
  };


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const doneTasks = tasks.filter((task) => task.done);
  const toDoTasks = tasks.filter((task) => !task.done);
  const highPriorityTasks = toDoTasks.filter((task) => task.priority === 'high');
  const normalPriorityTasks = toDoTasks.filter((task) => task.priority === 'normal');
  const lowPriorityTasks = toDoTasks.filter((task) => task.priority === 'low');

  let tasksToSend;
  if (priorityOfTask === 'high') {
    tasksToSend = highPriorityTasks;
  } else if (priorityOfTask === 'normal') {
    tasksToSend = normalPriorityTasks;
  } else if (priorityOfTask === 'low') {
    tasksToSend = lowPriorityTasks
  } else {
    tasksToSend = toDoTasks
  }

  return (
    <main className="flex flex-col items-center">
      <div className="flex justify-between items-center gap-12 mt-10 mb-6 w-[80%]">
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-xl text-white font-bold">To Do App</h1>
          <CiBoxList className="w-6 h-6 text-[#F5C61C]" />
        </div>
        <AddTask tasks={tasks} setTasks={setTasks} />
      </div>

      <div className="flex gap-8 text-white w-[80%]">
        <div className="w-2/3">
          <h3 className="font-semibold my-2">
            Tasks to do - {toDoTasks.length}
          </h3>
          <div className="w-full font-sans bg-[#403D3933] shadow-box-shadow py-4 px-6 space-y-1 rounded-md">
            <div className="w-full flex rounded-md bg-[#F5C61C] text-black">
              <button
                className={`px-3 py-2 ${priorityOfTask === 'all' ? 'bg-blue-500' : 'hover:bg-blue-500'} rounded-tl-md rounded-bl-md`}
                onClick={() => handlePriority('all')}
              >
                All
              </button>
              <button
                className={`px-3 py-2 ${priorityOfTask === 'high' ? 'bg-blue-500' : 'hover:bg-blue-500'}`}
                onClick={() => handlePriority('high')}
              >
                High
              </button>
              <button
                className={`px-3 py-2 ${priorityOfTask === 'normal' ? 'bg-blue-500' : 'hover:bg-blue-500'}`}
                onClick={() => handlePriority('normal')}
              >
                Normal
              </button>
              <button
                className={`px-3 py-2 ${priorityOfTask === 'low' ? 'bg-blue-500' : 'hover:bg-blue-500'}`}
                onClick={() => handlePriority('low')}
              >
                Low
              </button>
            </div>
            <TodoList
              tasks={tasksToSend}
              changeTaskDone={changeTaskDone}
              deleteTask={deleteTask}
            />
          </div>
        </div>

        <div className="w-1/3">
          <h3 className="font-semibold my-2">
            Done - {doneTasks.length}
          </h3>
          <div className="font-sans bg-[#403D3933] shadow-box-shadow py-4 px-6 space-y-1 rounded-md">
            <TodoList
              tasks={doneTasks}
              changeTaskDone={changeTaskDone}
              deleteTask={deleteTask}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
