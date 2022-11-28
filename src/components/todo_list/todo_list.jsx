import {useState} from 'react'
import AddTask from "../add_task/add_task"
import {v4 as uuidv4} from 'uuid'
import Todo from "../todo/todo"

export default function TodoList() {
	const [todos, setTodos] = useState([
		{id: '1', task: '장보기기', status: 'active'},
		{id: '2', task: '잠자기', status: 'active'}
	])


	const handleTask = todo => {
		setTodos([...todos, todo])
	}

	const handleDelete = (todo) => {
		setTodos(todos.filter(row => row.id !== todo.id)
		)
	}

	const handleUpdate = (updated) => {
		setTodos(todos.map(t => (t.id === updated.id) ? updated : t))
	}

	return (
		<section className="todos">
			<ul>
				{todos.map(row => (
					<Todo key={uuidv4()} todo={row} onUpdate={handleUpdate} onDelete={handleDelete} />
				))}
			</ul>
			<AddTask onAdd={handleTask} />
		</section>
	)
}
