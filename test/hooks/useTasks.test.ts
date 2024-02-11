import { expect, test } from "vitest";
import { TaskInterface, useTasks } from "../../src/hooks/useTasks";
import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";



test('useTasks should return an oject with properties of tasks, setTasks, changeTaskDone, deleteTask', () => {
  const { result } = renderHook(() => useTasks());

  expect(result.current).toEqual(expect.objectContaining({
    tasks: expect.any(Array),
    setTasks: expect.any(Function),
    changeTaskDone: expect.any(Function),
    deleteTask: expect.any(Function),
  }));

  const { tasks } = result.current;
  expect(tasks).toEqual([
    expect.objectContaining({ id: expect.any(String), description: expect.any(String), priority: expect.any(String), done: expect.any(Boolean) }),
    expect.objectContaining({ id: expect.any(String), description: expect.any(String), priority: expect.any(String), done: expect.any(Boolean) }),
    expect.objectContaining({ id: expect.any(String), description: expect.any(String), priority: expect.any(String), done: expect.any(Boolean) }),
  ] as TaskInterface[]);
});

test('returns initial tasks', (): void => {
    const { result } = renderHook(() => useTasks());
    const { tasks } = result.current;
    expect(tasks.length).toBe(3)
});

test('changes task done status', () => {
    const { result } = renderHook(() => useTasks());
    const { tasks, changeTaskDone } = result.current;
  
    const taskId = tasks[0].id; 
    act(() => {
      changeTaskDone(taskId);
    });
  
    const updatedTasks = result.current.tasks; 
    const changedTask = updatedTasks.find(task => task.id === taskId); 
  
    expect(changedTask!.done).toBe(true); 
});

test('delete a task', () => {
    const { result } = renderHook(() => useTasks());
    const { tasks, deleteTask } = result.current;

    const taskId = tasks[0].id;

    act(() => { deleteTask(taskId) });

    expect(result.current.tasks.length).toBe(2);
})
