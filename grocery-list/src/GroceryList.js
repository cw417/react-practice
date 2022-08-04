import React from 'react'
import Grocery from './Grocery';

export default function GroceryList({ groceries }) {
  return (
    groceries.map(grocery => {
      return <Grocery key={grocery.id} grocery={grocery} />
    })
  )
}
