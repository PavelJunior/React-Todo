import React, { ChangeEvent, FormEvent, useState } from 'react';

import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <form className="add-todo-form">
      <input
        type="text"
        value={newTodo}
        onChange={handleChange}
        className="text-input"
        placeholder="Enter task here..."
      />
      <button onClick={handleSubmit} className="add-button">
        <FontAwesomeIcon icon={faPlus} color="white" />
      </button>
    </form>
  );
};
