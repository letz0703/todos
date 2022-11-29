import {useState} from 'react'
import './App.css'
import Header from "./components/header/header"
import TodoList from "./components/todo_list/todo_list"

const filters = ['all', 'active', 'completed']

function App() {
  const [filter, setFilter] = useState(filters[0])
  return (
    <div className='App'>
      <Header filters={filters} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </div>
  )
}

export default App

