import './App.css';
import React, { useState, useRef, useEffect } from 'react'
import GroceryList from './GroceryList';
import { v4 as uuidv4 } from 'uuid'

const LOCAL_STORAGE_KEY = 'groceryApp.groceries'

function App() {
  const [groceries, setGroceries] = useState([])
  const groceryNameRef = useRef()

  useEffect(() => {
    const storedGroceries = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedGroceries) setGroceries(storedGroceries)
  }, [])
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(groceries))
  }, [groceries])

  function handleAddGrocery(e) {
    const name = groceryNameRef.current.value
    if (name === '') return
    setGroceries(prevGroceries => {
      return [...prevGroceries, { id: uuidv4(), name: name}]
    })
    groceryNameRef.current.value = null
  }

  return (
    <>
      <div className='title'>
        <span className='title--text'>Groceries</span>
      </div>
      <GroceryList groceries={groceries} />
      <input ref={groceryNameRef} type='text' />
      <button onClick={handleAddGrocery}>Add Item</button>

    </>
  );
}

export default App;
