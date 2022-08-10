import React from 'react'

export default function IngredientsList({ cocktail }) {

  return (
    cocktail.ingredients.map((ingredient, index) => {
      return (
        <div key={index}>
          <div className='container--ingredients'>
            <span className='span--amount'>{ingredient.amount}</span>
            <span>{ingredient.name}</span>
          </div>
        </div>
      )
    })
  )

}
