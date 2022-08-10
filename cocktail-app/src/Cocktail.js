import React, { useState } from 'react'
import CocktailInfo from './CocktailInfo'


export default function Cocktail({ cocktail, selectCocktail, removeCocktail, addIngredient, removeIngredient }) {

  const [ display, setDisplay ] = useState('none')
  
  function handleSelect() {
    if (display === 'none') {
      setDisplay('block')
      console.log('selected ' + cocktail.name)
    } else {
      setDisplay('none')
      console.log('unselected ' + cocktail.name)
    }
  }

  function handleRemoveCocktail() {
    removeCocktail(cocktail.id)
    console.log(`removing ${cocktail.name}`)
  }

  return (
    <div>
      <div>
        {cocktail.name}
        <span className='pad-left'>
          <input type='checkbox' onClick={handleSelect} />
        </span>
        <span className='pad-left'>
          <button onClick={handleRemoveCocktail}>x</button>
        </span>
        <div style={{display:display}}>
          <CocktailInfo
            cocktail={cocktail} 
            addIngredient={addIngredient}
            removeIngredient={removeIngredient}
          />
        </div>
      </div>
      <br style={{display:display}} />
    </div>
  )
}
