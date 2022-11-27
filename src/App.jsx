import {useState} from 'react'

import './App.css'

function App() {
  return (
    <div className='App'>
      <TodoList />
    </div>
  )
}

export default App

function TodoList() {
  const [todos, setTodos] = useState([
    {id: '1', task: '장보기기', status: 'active'},
    {id: '2', task: '잠자기', status: 'active'}
  ])

  return (
    <section className="todos">
      <ul>
        {todos.map(row => <li key={row.id}>{row.task}</li>)}
      </ul>
    </section>
  )
}
