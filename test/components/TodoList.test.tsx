import { expect, test } from "vitest";
import { TodoList } from "../../src/components";
import { render } from "@testing-library/react";

const tasks = [
  {
    id: "1",
    description: "Task 1",
    priority: "high",
    done: false,
  },
  {
    id: "2",
    description: "Task 2",
    priority: "low",
    done: true,
  },
  {
    id: "3",
    description: "Task 3",
    priority: "medium",
    done: false,
  },
];

test("renders TodoList component with tasks", () => {
  const changeTaskDone = () => {};
  const deleteTask = () => {};

  const { getByText } = render(
    <TodoList
      tasks={tasks}
      changeTaskDone={changeTaskDone}
      deleteTask={deleteTask}
    />
  );

  tasks.forEach((task) => {
    expect(getByText(task.description)).toBeInTheDocument();
  });
});
