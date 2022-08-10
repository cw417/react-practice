import React from 'react'

export default function IngredientsList({ cocktail, removeIngredient }) {

  function handleRemoveIngredient(cocktailId, ingredientId) {
    console.log(`removing ${ingredientId} from ${cocktailId}`)
    removeIngredient(cocktailId, ingredientId)
  }

  return (
    cocktail.ingredients.map((ingredient, index) => {
      return (
        <div key={index}>
          <div className='container--ingredients'>
            <span className='span--amount'>{ingredient.amount}</span>
            <span>{ingredient.name}</span>
            <span className='pad-left'>
              <button 
                onClick={() => handleRemoveIngredient(cocktail.id, ingredient.id)}
              >-</button>
            </span>
          </div>
        </div>
      )
    })
  )

}
