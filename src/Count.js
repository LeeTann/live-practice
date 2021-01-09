import React, { useState } from 'react'

const Count = () => {
  const [counter, setCounter] = useState(0)
  const [active, setActive] = useState(false)

  const AddOne = () => {
    setCounter(counter + 1)
  }

  const DeleteOne = () => {
    setCounter(counter - 1)
  }

  return (
    <div>
      <h1>Count</h1>
      <p>{counter}</p>
      <button onClick={AddOne}>Increment</button>
      <button onClick={DeleteOne} disabled={counter > 0 ? active : !active}>
        Decrement
      </button>
    </div>
  )
}

export default Count
