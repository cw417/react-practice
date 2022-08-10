import React, { useState } from 'react'
import CocktailInfo from './CocktailInfo'


export default function Cocktail({ cocktail, selectCocktail, addIngredient }) {

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


  return (
    <div>
      <div>
        {cocktail.name}
        <span className='pad-left'>
          <input type='checkbox' onClick={handleSelect} />
        </span>
        <div style={{display:display}}>
          <CocktailInfo
            cocktail={cocktail} 
            addIngredient={addIngredient}
          />
        </div>
      </div>
      <br style={{display:display}} />
    </div>
  )
}
