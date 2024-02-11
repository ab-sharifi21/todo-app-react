import { expect, test } from 'vitest';
import { TodoItem } from '../../src/components';
import { fireEvent, render } from '@testing-library/react';

const mockTask = {
  id: '1',
  description: 'Task 1',
  priority: 'high',
  done: false,
};

test('renders TodoItem component with correct task data', () => {
  const changeTaskDone = () => {};
  const deleteTask = () => {};

  const { getByText } = render(
    <TodoItem
      task={mockTask}
      changeTaskDone={changeTaskDone}
      deleteTask={deleteTask}
    />,
  );

  expect(getByText('Task 1')).toBeInTheDocument();
});

test('calls changeTaskDone function when checkbox is clicked', () => {
  let changedTaskId = '';
  const changeTaskDone = (id: string) => {
    changedTaskId = id;
  };

  const { getByTestId } = render(
    <TodoItem
      task={mockTask}
      changeTaskDone={changeTaskDone}
      deleteTask={() => {}}
    />,
  );

  const checkbox = getByTestId('todo-checkbox');
  expect(checkbox).toBeInTheDocument();
  fireEvent.click(checkbox);
  expect(changedTaskId).toBe('1');
});

test('calls deleteTask function when delete icon is clicked', () => {
  let deletedTaskId = '';
  const deleteTask = (id: string) => {
    deletedTaskId = id;
  };

  const { getByTestId } = render(
    <TodoItem
      task={mockTask}
      changeTaskDone={() => {}}
      deleteTask={deleteTask}
    />,
  );

  const deleteIcon = getByTestId('delete-icon');
  expect(deleteIcon).toBeInTheDocument();
  fireEvent.click(deleteIcon);
  expect(deletedTaskId).toBe('1');
});
