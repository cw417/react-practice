import React from 'react'

export default function Grocery({ grocery, removeGrocery }) {
  function handleRemoveClick() {
    removeGrocery(grocery.id)
  }

  function formatGrocery(grocery) {
    return `${grocery.num} ${grocery.name}`
  }

  return (
    <div>
      <span>
        {formatGrocery(grocery)} <button onClick={handleRemoveClick}>Remove</button>
      </span>
    </div>
  )
}
