import { useTasks } from './hooks/useTasks';
import { AddTask, TodoList } from './components';
import { useEffect } from 'react';

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
      <div className="my-4 bg-[#403D3933] shadow-box-shadow p-6 rounded-lg w-[350px]">
        <AddTask tasks={tasks} setTasks={setTasks} />
      </div>

      <div className="flex gap-8 text-white w-[90%]">
        <div className="w-1/2">
          <h3 className="text-sm font-semibold my-2">
            Tasks to do - {toDoTasks.length}
          </h3>
          <TodoList
            tasks={toDoTasks}
            changeTaskDone={changeTaskDone}
            deleteTask={deleteTask}
          />
        </div>

        <div className="w-1/2">
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
