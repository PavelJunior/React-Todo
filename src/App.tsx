import React, { useState } from 'react';
import { TodoList } from './components/TodoList';
import { AddTodoForm } from './components/AddTodoForm';
import './App.css';

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

  const deleteTodo: DeleteTodo = (todoToDelete) => {
    const newTodos = todos.filter((todo) => {
      return todo != todoToDelete;
    });

    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== '' &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <div className="background">
      <div className="list-body">
        <TodoList
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          todos={todos}
        />
        <AddTodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
