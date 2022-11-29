import {useState} from 'react'
import './App.css'
import Header from "./components/header/header"
import TodoList from "./components/todo_list/todo_list"

function App() {
  return (
    <div className='App'>
      <Header />
      <TodoList />
    </div>
  )
}

export default App

