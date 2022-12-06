import React from 'react';
import {VscTrash} from 'react-icons/vsc';
import styles from './todo.module.css';
export default function Todo({todo, onChange, onDelete}) {
  const {task, status} = todo;
  const handleDelete = () => {
    onDelete(todo);
  };
  const handleChange = e => {
    const status = e.target.checked ? 'completed' : 'active';
    onChange({...todo, status});
  };

  return (
    <li className="flex items-center {{styles.todo }}">
      <input
        type="checkbox"
        checked={status === 'completed'}
        id="checkbox"
        onChange={handleChange}
        className="checkbox"
      />
      <label htmlFor="checkbox" className="text">
        {task}
      </label>
      <button onClick={handleDelete} className="button">
        <VscTrash />
      </button>
    </li>
  );
}
