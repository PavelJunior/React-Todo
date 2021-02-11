import React from 'react';
import { TodoListItem } from '../TodoListItem';
import './style.css';
import { animated, useTransition } from 'react-spring';

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
  const transitions = useTransition(todos, (item) => item.id, {
    from: { transform: 'translate3d(40px,0,0)' },
    enter: { transform: 'translate3d(0,0,0)' },
    leave: { transform: 'translate3d(-40px,0,0)' },
  });

  return (
    <div className="todo-list">
      {transitions.map(({ item, key, props }) => {
        return (
          <animated.div key={key} style={props}>
            <TodoListItem
              todo={item}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          </animated.div>
        );
      })}
    </div>
  );
};
