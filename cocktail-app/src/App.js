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
    cocktailNameRef.current.value = null
  }

  

  return (
    <>
      <div>
        <CocktailList 
          cocktails={cocktails} 
        />
        <input ref={cocktailNameRef} placeholder='Cocktail Name' type='text' />
        <span className='pad-left' >
          <button onClick={handleAddCocktail}>Add</button>
        </span>
        </div>
    </>
  );
}

export default App;
