import {useState, useRef, useEffect} from 'react'
import styles from './add_task.module.css'
export default function AddTask({onAdd}) {
	const [task, setTask] = useState('')
	const handleChange = (e) => {
		setTask(e.target.value)
	}
	const refInput_task = useRef()

	useEffect(() => {
		refInput_task.current.focus()
	}, [task])

	const handleSubmit = (e) => {
		e.preventDefault()
		if (task.trim().length === 0) {return }
		onAdd({id: 'goyou', task, status: 'active'})
		setTask('')
	}
	return (
		<form onSubmit={handleSubmit}>
			<input ref={refInput_task} type="text" value={task} onChange={handleChange} className="bg-red-200 p-2 mx-1" />
			<button>Add</button>
		</form>
	)
}

