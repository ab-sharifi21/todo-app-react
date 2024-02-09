import { useTasks } from './hooks/useTasks';
import { AddTask, TodoList } from './components';
import { LuListTodo } from 'react-icons/lu';

function App() {
  const { tasks, setTasks, changeTaskDone, deleteTask } = useTasks();

  return (
    <div className="bg-[#403D3933] shadow-box-shadow flex flex-col gap-5 p-10 rounded-lg w-full">
      <h1 className="text-3xl mb-3 text-white flex gap-3 items-center">
        Todo App
        <LuListTodo className="text-[#eb5e28]" />
      </h1>

      <div>
        <AddTask tasks={tasks} setTasks={setTasks} />
      </div>

      <div>
        <TodoList
          tasks={tasks}
          changeTaskDone={changeTaskDone}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
