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
          ingredients: [], 
          selected: false,
          editing: false
        }
      ]
    })
    console.log(`added ${name} to cocktails`)
    cocktailNameRef.current.value = null
  }

  function handleClearAll() {
    setCocktails([])
  }

  function removeCocktail(id) {
    const newCocktails = cocktails.filter(cocktail => cocktail.id !== id)
    setCocktails(newCocktails)
  }

  function addIngredient(id, name, amount) {
    // used in CocktailInfo component
    const newCocktails = [...cocktails]
    const cocktail = newCocktails.find(cocktail => cocktail.id === id)
    const newIngredient = {id: uuidv4(), name: name, amount: amount}
    cocktail.ingredients.push(newIngredient)
    setCocktails(newCocktails)
    console.log(`${newIngredient.name} added to ${cocktail.name}`)
  }

  return (
    <>
      <div className='container container--header'>
        <div className='container--header__title'>
          Cocktails
        </div>
        
        <div className='container--header__addCocktail'>
          <input ref={cocktailNameRef} placeholder='Cocktail Name' type='text' />
          <span className='pad-left' >
            <button className='container--header__addCocktail__button' onClick={handleAddCocktail}>Add</button>
          </span>
        </div>

        <div>
          <button onClick={handleClearAll}>Clear All</button>
        </div>
      </div>

      <div >
        <div className='container'>
          <CocktailList
            cocktails={cocktails}
            addIngredient={addIngredient}
            removeCocktail={removeCocktail}
          />
          </div>
      </div>

    </>
  );
}

export default App;
