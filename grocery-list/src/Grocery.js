import React from 'react'

export default function Grocery({ grocery, removeGrocery }) {
  function handleRemoveClick() {
    removeGrocery(grocery.id)
  }
  return (
    <div>
      <span>
        {grocery.num} {grocery.name} <button onClick={handleRemoveClick}>Remove</button>
      </span>
    </div>
  )
}
