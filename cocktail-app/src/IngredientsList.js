import React from 'react'

export default function IngredientsList({ cocktail }) {

  return (
    cocktail.ingredients.map((ingredient, index) => {
      return (
        <div key={index}>{ingredient.amount} oz {ingredient.name}</div>
      )
    })
  )

}
