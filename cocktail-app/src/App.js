import './App.css';
import React, { useState, useRef, useEffect } from 'react'
import CocktailList from './CocktailList';
import { v4 as uuidv4 } from 'uuid';
import { FiChevronDown }from "react-icons/fi";

function App() {

  const [cocktails, setCocktails] = useState([])
  const [prevCocktails, setPrevCocktails] = useState([])
  const cocktailNameRef = useRef()
  const searchRef = useRef()

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
    setCocktails(prev => {
      return [...prev, 
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
    setPrevCocktails(cocktails)
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

  function removeIngredient(cocktailId, ingredientId) {
    const newCocktails = [...cocktails]
    const cocktail = newCocktails.find(cocktail => cocktail.id === cocktailId)
    cocktail.ingredients = cocktail.ingredients.filter(ingredient => ingredient.id !== ingredientId)
    setCocktails(newCocktails)
  }

  function searchIngredients(query, cocktail) {
    setPrevCocktails(cocktails)
    let found = false
    cocktail.ingredients.forEach(ingredient => {
      console.log(`searching for ${query} in ${cocktail.name}`)
      if (ingredient.name.toLowerCase().includes(query)) {
        found = true
      }
    })
    return found
  }

  function handleKeyPress(event) {
    if (event.keyCode === 13 || event.which === 13) {
      handleAddCocktail()
    }
  }

  function handleSearch() {
    const query = searchRef.current.value.toLowerCase()
    const searchResults = cocktails.filter(cocktail => 
      cocktail.name.toLowerCase().includes(query) || searchIngredients(query, cocktail))
    setCocktails(searchResults)
    searchRef.current.value = null
  }

  function handleReturn() {
    // returns cocktails list to previous state after search filter
    setCocktails(prevCocktails)
  }

  return (
    <>
      <div className='container--app'>
        <div className='container container--header'>
          <div className='container--header__title'>
            Cocktails
          </div>
          
          <div className='container--header__addCocktail'>
            <input 
              placeholder='Cocktail Name' 
              type='text'
              ref={cocktailNameRef} 
              onKeyPress={handleKeyPress}
            />
            <span className='pad-left' >
              <button 
                className='container--header__addCocktail__button' 
                onClick={handleAddCocktail}
              > Add</button>
            </span>
          </div>

          <div>
            <button onClick={handleClearAll}>Clear All</button>
          </div>

          <div>
            <input type='text' placeholder='Search' ref={searchRef} />
            <span className='pad-left'>
              <button onClick={handleSearch}>Search</button>
            </span>
          </div>

          <div>
            <button onClick={handleReturn} >Return</button>
          </div>

        </div>

        <div >
          <div className='container'>
            <CocktailList
              cocktails={cocktails}
              addIngredient={addIngredient}
              removeCocktail={removeCocktail}
              removeIngredient={removeIngredient}
            />
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
