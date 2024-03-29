import React from 'react'
import Cocktail from './Cocktail'

export default function CocktailList({ cocktails, removeCocktail, addIngredient, removeIngredient }) {
  return (
    cocktails.map(cocktail => {
      return (
        <Cocktail
          key={cocktail.id}
          cocktail={cocktail}
          addIngredient={addIngredient}
          removeCocktail={removeCocktail}
          removeIngredient={removeIngredient}
        />
      )
    })
  )
}
