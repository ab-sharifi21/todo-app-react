import { useState } from 'react';
import { AddTask, TodoList } from './components'
import { v4 as uuidv4 } from 'uuid';

export interface TaskInterface {
  id: string,
  description: string,
  priority: string,
  done: boolean
}

const initialState: TaskInterface[] = [
  {
    id: uuidv4(),
    description: 'Ir al gimnasio',
    priority: 'high',
    done: false
  },
  {
    id: uuidv4(),
    description: 'Limpiar la casa',
    priority: 'low',
    done: true
  },
  {
    id: uuidv4(),
    description: 'Ir a la compra',
    priority: 'medium',
    done: false
  },
]

function App() {

  const [tasks, setTasks] = useState(initialState);

  return (
    <div className='flex flex-col gap-10'>

      <div>
        <AddTask tasks={tasks} setTasks={setTasks} />
      </div>

      <div>
        <TodoList tasks={tasks} setTasks={setTasks} />
      </div>

    
    </div>
  )
}

export default App
