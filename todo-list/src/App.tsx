import React, { useState } from 'react';

type TodoItem = {
  id: number
  value: string
}

let count = 1

export const TodoList = () => {
  const [list, setList] = useState<TodoItem[]>([{ id: 0, value: '' }])
  
  const handleAdd = (index: number) => {
    const newItem = { id: count++, value: '' }
    setList(eachItem => [...eachItem.slice(0, index + 1), newItem, ...eachItem.slice(index + 1)])
  }

  const handleChange = (value: string, id: TodoItem['id']) => {
    setList(eachItem => eachItem.map(item => item.id === id ? { ...item, value } : item))
  }

  const handleDelete = (id: TodoItem['id']) => {
    setList(eachItem => eachItem.filter(item => item.id !== id))
  }

  return (
    <div>
      {list.map((item, index) => (
        <div key={item.id}>
          <input
            value={item.value}
            onChange={e => handleChange(e.currentTarget.value, item.id)}
          />
          <button onClick={() => handleAdd(index)}>
           +
          </button>
          {list.length > 1 && (
            <button onClick={() => handleDelete(item.id)}>
              -
            </button>
          )}
        </div>
      ))}
    </div>
  )
}