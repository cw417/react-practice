import React from 'react'
import Grocery from './Grocery';

export default function GroceryList({ groceries, removeGrocery }) {
  return (
    groceries.map(grocery => {
      return (
      <Grocery 
        key={grocery.id}
        grocery={grocery}
        removeGrocery={removeGrocery}
      /> )
    })
  )
}
