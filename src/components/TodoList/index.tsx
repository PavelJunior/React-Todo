import React from 'react';
import { TodoListItem } from '../TodoListItem';
import './style.css';

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <div className="todo-list">
      {todos.map((todo: Todo) => {
        return (
          <TodoListItem
            key={todo.text}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
};
