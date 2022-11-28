import React from "react"
//import styles from './todo.module.css'
import {VscTrash} from 'react-icons/vsc'

export default function Todo({todo, onDelete}) {
	const handleDelete = () => {
		onDelete(todo)
	}
	return <li className="flex items-center">
		{todo.task}
		<button onClick={handleDelete}><VscTrash /></button>
	</li>
}
