import React from 'react'

export default function Grocery({ grocery, removeGrocery }) {
  function handleRemoveClick() {
    removeGrocery(grocery.id)
  }
  return (
    <div>
      {grocery.name}
      <button onClick={handleRemoveClick}>Remove</button>
    </div>
  )
}
