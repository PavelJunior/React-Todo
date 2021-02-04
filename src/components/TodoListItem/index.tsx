import React from 'react';

import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleTodo,
  deleteTodo,
}) => {
  const itemStyle = todo.complete
    ? 'todo-item todo-item-complete'
    : 'todo-item';
  const textStyle = todo.complete
    ? 'todo-text todo-text-complete'
    : 'todo-text';

  return (
    <div className={itemStyle}>
      <p className={textStyle}>{todo.text}</p>
      <div className="todo-buttons">
        <button className="button-check" onClick={() => toggleTodo(todo)}>
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button className="button-delete" onClick={() => deleteTodo(todo)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};
