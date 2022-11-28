import React from "react"
//import styles from './todo.module.css'
// import {FiTrash} from "react-icons/fi"

export default function Todo({todo, onUpdate, onDelete}) {
	const {task, status} = todo
	const handleChange = (e) => {
		const status = e.target.checked ? 'completed' : 'active'
		onUpdate({...todo, status})
	}
	const handleDelete = () => {onDelete(todo)}
	return (
		<li className="flex items-center">
			<input type="checkbox" checked={status === "completed"}
				onChange={handleChange}
				id="checkbox"
			/>
			<label htmlFor="checkbox">{todo.task}</label>
			{task}
			<button onClick={handleDelete}>🗑️</button>
			{/* <button onClick={handleDelete}><FiTrash /></button> */}
		</li>
	)
}
