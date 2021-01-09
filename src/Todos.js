import React, { useState } from 'react'

const Todos = () => {
  const [todos, setTodos] = useState([])
  const [todoInput, setTodoInput] = useState('')

  const addTodo = () => {
    if (todoInput !== '') {
      const todoObject = {
        id: Math.floor(Math.random() * 10000),
        value: todoInput,
        isCompleted: false,
      }
      setTodos([...todos, todoObject])
      setTodoInput('')
    }
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id))
  }

  const taskCompleted = (id) => {
    let updatedCompleted = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted
      }
      return todo
    })

    setTodos(updatedCompleted)
  }

  console.log(todos)
  return (
    <div>
      <h1>todos</h1>
      <input
        type='text'
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos &&
          todos.map(({ value, id, isCompleted }) => (
            <li>
              {value}
              <button onClick={() => taskCompleted(id)}>
                {isCompleted ? 'Completed' : 'Not Completed'}
              </button>
              <button onClick={() => deleteTodo(id)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Todos
