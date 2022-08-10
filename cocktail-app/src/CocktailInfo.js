import React, { useState, useRef } from 'react'
import IngredientsList from './IngredientsList'

export default function CocktailInfo({ cocktail, addIngredient }) {
  
  const [ display, setDisplay ] = useState('none')
  const ingredientName = useRef()
  const ingredientAmount = useRef()
  
  function handleEdit() {
    if (display === 'none') {
      setDisplay('block')
      console.log('editing ingredients for ' + cocktail.name)
    } else {
      setDisplay('none')
      console.log('finished editing ingredients for ' + cocktail.name)
    }
  }

  function handleAddIngredient() {
    //const ingredient = { name: ingredientName, amount: ingredientAmount}
    console.log(typeof(ingredient))
    addIngredient(cocktail.id, ingredientName.current.value, ingredientAmount.current.value)
  }

  return (
      <>
        <button onClick={handleEdit} >Edit</button>
        <IngredientsList 
          cocktail={cocktail}
        />
        <div style={{display:display}}>
          <input className='input--ingredientAmount' type='text' ref={ingredientAmount} placeholder='Amt' />
          <input type='text' ref={ingredientName} placeholder='Ingredient' />
          <button onClick={handleAddIngredient}>+</button>
        </div>
      </>
  )
}
