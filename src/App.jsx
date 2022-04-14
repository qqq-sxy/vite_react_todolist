import React, { useState } from 'react'

import TodoItem from './components/TodoItem'
import ToDoContainer from './components/TodoContainer'
import ToDoFilter from './components/ToDoFilter'
import { STATUS } from './config/status'

function App() {
  const [todos, setTodos] = useState([])
  const [filterStatus, setFilterStatus] = useState(`${STATUS.IS_CREATE},${STATUS.IS_DONE}`)

  const handleSubmit = (todoItem) => {
    setTodos([
      ...todos,
      todoItem
    ])
  }

  const handleOperate = (todoItem) => {
    const newTodos = todos.filter(todo => todo.id !== todoItem.id)
    newTodos.push(todoItem)
    setTodos(newTodos)
  }

  const handleStatusChange = (status) => {
    console.log(status);
    setFilterStatus(status)
  }


  return (
    <div className='todo-app'>
      <h2 className='todo-title'>待办清单</h2>
      <TodoItem onSubmit={handleSubmit}/>
      <ToDoFilter filterStatus={filterStatus} onFilterStatus={handleStatusChange}/>
      <ToDoContainer todos={todos} onOperate={handleOperate} filterStatus={filterStatus}/>
    </div>
  )
}

export default App
