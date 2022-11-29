import {useState} from "react"
import AddTask from "../add_task/add_task"
import {VscTrash} from "react-icons/vsc"
import {v4 as uuidv4} from 'uuid'
import Todo from "../todo/todo"

export default function TodoList({filter}) {
	const [todos, setTodos] = useState([
		{id: "1", task: "장보기", status: "active"},
		{id: "2", task: "잠자기", status: "active"}
	])

	const handleTask = todo => {setTodos([...todos, todo])}
	const handleUpdate = (updated) => setTodos(todos.map(
		row => (row.id === updated.id ? updated : row)
	))
	const handleDelete = (todo) => {
		setTodos(todos.filter(row => row.id !== todo.id))
	}

	const filtered = getFilteredItems(todos, filter)

	return (
		<section>
			<ul>
				{filtered.map(row => (
					<Todo key={uuidv4()} todo={row}
						onChange={handleUpdate}
						onDelete={handleDelete}
					/>
				))}
			</ul>
			<AddTask onAdd={handleTask} />
		</section>
	)
}

function getFilteredItems(todos, filter) {
	if (filter === 'all') {
		return todos
	}
	return todos.filter(todo => todo.status === filter)
}