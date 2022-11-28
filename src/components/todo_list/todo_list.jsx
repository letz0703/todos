import {useState} from 'react'
import AddTask from "../add_task/add_task"
import {v4 as uuidv4} from 'uuid'

export default function TodoList() {
	const [todos, setTodos] = useState([
		{id: '1', task: '장보기기', status: 'active'},
		{id: '2', task: '잠자기', status: 'active'}
	])


	const handleTask = todo => {
		// console.log(todo)
		setTodos([...todos, todo])
	}

	const handleDelete = (e) => {
		setTodos(todos.filter(todo => todo.task !== e.target.value)
		)
	}

	return (
		<section className="todos">
			<ul>
				{todos.map(row => (
					<li key={uuidv4()}>
						{row.task}
						<button onClick={handleDelete} value={row.task}>🗑️</button>
					</li>
				))}
			</ul>
			<AddTask onAdd={handleTask} />
		</section>
	)
}
