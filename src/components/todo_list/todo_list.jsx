import {useState} from "react"
import AddTask from "../add_task/add_task"
import {VscTrash} from "react-icons/vsc"
import {v4 as uuidv4} from 'uuid'
import Todo from "../todo/todo"

export default function TodoList() {
	const [todos, setTodos] = useState([
		{id: "1", task: "장보기", status: "active"},
		{id: "2", task: "잠자기", status: "active"}
	])

	const handleTask = todo => {
		// console.log(todo)
		setTodos([...todos, todo])
	}

	const handleDelete = (todo) => {
		setTodos(todos.filter(row => row.id !== todo.id))
	}
	return (
		<section className="todos">
			<ul>
				{todos.map(todo => (
					<Todo key={uuidv4()} todo={todo}
						onDelete={handleDelete}
					/>
				))}
			</ul>
			<AddTask onAdd={handleTask} />
		</section>
	)
}
