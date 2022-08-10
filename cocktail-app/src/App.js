import './App.css';
import React, { useState, useRef, useEffect } from 'react'
import CocktailList from './CocktailList';
import { v4 as uuidv4 } from 'uuid'

function App() {

  const [cocktails, setCocktails] = useState([])
  const cocktailNameRef = useRef()

  const LOCAL_STORAGE_KEY = 'cocktailApp.cocktails'

  useEffect(() => {
    const storedCocktails = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedCocktails) setCocktails(storedCocktails)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cocktails))
  }, [cocktails])
  
  function handleAddCocktail() {
    const name = cocktailNameRef.current.value
    if (name === '') return
    setCocktails(prevCockails => {
      return [...prevCockails, 
        { 
          id: uuidv4(), 
          name: name, 
          ingredients: [{id: uuidv4(), name: 'whisky', amount: '2'}, {id: uuidv4(), name: 'sweet vermouth', amount: '1'}], 
          selected: false,
          editing: false
        }
      ]
    })
    cocktailNameRef.current.value = null
  }

  function handleClearAll() {
    setCocktails([])
  }

  function addIngredient(id, name, amount) {
    // used in CocktailInfo component
    const newCocktails = [...cocktails]
    const cocktail = newCocktails.find(cocktail => cocktail.id === id)
    const newIngredient = {name: name, amount: amount}
    cocktail.ingredients.push(newIngredient)
    setCocktails(newCocktails)
    console.log(`${newIngredient.name} added to ${cocktail.name}`)
  }

  return (
    <>
      <div>
        <CocktailList
          cocktails={cocktails}
          addIngredient={addIngredient}
        />
        <input ref={cocktailNameRef} placeholder='Cocktail Name' type='text' />
        <span className='pad-left' >
          <button onClick={handleAddCocktail}>Add</button>
        </span>
        </div>
        <div>
          <button onClick={handleClearAll}>Clear All</button>
        </div>
    </>
  );
}

export default App;
