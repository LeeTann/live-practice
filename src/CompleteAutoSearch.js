import React, { useState } from 'react'

const CompleteAutoSearch = () => {
  let myArray = [
    'Adam',
    'Alan',
    'Allen',
    'Bob',
    'Billy',
    'Beth',
    'Bagley',
    'Rebs',
    'Luke',
    'Lee',
  ]
  let suggestion = []

  const [value, setValue] = useState()
  const [list, setList] = useState()

  const setInputValue = (name) => {
    setValue(name)
  }

  const autoComplete = (e) => {
    setValue(e.target.value)
    myArray.forEach((name) => {
      if (
        name.substr(0, e.target.value.length).toUpperCase() ===
        e.target.value.toUpperCase()
      ) {
        suggestion.push(name)
        console.log(suggestion)
        setList(
          suggestion.map((name, index) => {
            return (
              <p key={index} onClick={() => setInputValue(name)}>
                {name}
              </p>
            )
          })
        )
      }

      if (e.target.value.length === 0) {
        setList('')
      }
    })
  }

  return (
    <div>
      <h1>AutoComplete</h1>
      <input value={value} onChange={(e) => autoComplete(e)} />
      <div>{list}</div>
    </div>
  )
}

export default CompleteAutoSearch
