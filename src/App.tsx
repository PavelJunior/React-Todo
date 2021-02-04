import React, { useState } from 'react';
import { TodoList } from './components/TodoList';
import { AddTodoForm } from './components/AddTodoForm';

const initialTodos: Array<Todo> = [
  {
    text: 'walk the dog',
    complete: true,
  },
  {
    text: 'do dishes',
    complete: false,
  },
  {
    text: 'write an app',
    complete: false,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== '' &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <>
      <TodoList toggleTodo={toggleTodo} todos={todos} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
}

export default App;
