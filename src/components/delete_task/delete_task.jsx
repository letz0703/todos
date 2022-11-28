import React from "react"
//import styles from './delete_task.module.css'


export default function DeleteTask({handleDelete}) {
	return <button onClick={handleDelete}>🗑️</button>
}
