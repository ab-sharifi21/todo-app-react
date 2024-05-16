import { useTasks } from './hooks/useTasks';
import { AddTask, TodoList } from './components';
import { useEffect } from 'react';
import { CiBoxList } from 'react-icons/ci';

function App() {
  const { tasks, setTasks, changeTaskDone, deleteTask } = useTasks();

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const doneTasks = tasks.filter((task) => {
    if (task.done) {
      return task;
    }
  });

  const toDoTasks = tasks.filter((task) => {
    if (!task.done) {
      return task;
    }
  });

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between items-center gap-12 mt-10 mb-6 w-[80%]">
        <div className='flex items-center justify-center gap-2'>
          <h1 className='text-xl text-white font-bold'>To Do App</h1>
          <CiBoxList className='w-6 h-6 text-[#F5C61C]' />
        </div>
        <AddTask tasks={tasks} setTasks={setTasks} />
      </div>

      <div className="flex gap-8 text-white w-[80%]">
        <div className="w-2/3">
          <h3 className="text-sm font-semibold my-2">
            Tasks to do - {toDoTasks.length}
          </h3>
          <TodoList
            tasks={toDoTasks}
            changeTaskDone={changeTaskDone}
            deleteTask={deleteTask}
          />
        </div>

        <div className="w-1/3">
          <h3 className="text-sm font-semibold my-2">
            Done - {doneTasks.length}
          </h3>
          <TodoList
            tasks={doneTasks}
            changeTaskDone={changeTaskDone}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
