import React from "react"
//import styles from './todo.module.css'
import {VscTrash} from 'react-icons/vsc'

export default function Todo({todo, onChange, onDelete}) {
	const {task, status} = todo
	const handleDelete = () => {
		onDelete(todo)
	}
	const handleChange = (e) => {
		const status = e.target.checked ? 'completed' : 'active'

		onChange({...todo, status})
	}

	return <li className="flex items-center">
		<input type="checkbox"
			checked={status === 'completed'}
			id="checkbox"
			onChange={handleChange}
		/>
		<label htmlFor="checkbox">{task}</label>
		<button onClick={handleDelete}><VscTrash /></button>
	</li>
}
