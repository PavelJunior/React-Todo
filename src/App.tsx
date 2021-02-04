import React from 'react';
import { TodoListItem } from './components/TodoListItem';

const todos: Array<Todo> = [
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
  return <TodoListItem todo={todos[0]} />;
}

export default App;
