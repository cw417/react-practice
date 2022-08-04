import './App.css';
import React, { useState, useRef, useEffect } from 'react'
import GroceryList from './GroceryList';
import { v4 as uuidv4 } from 'uuid'

const LOCAL_STORAGE_KEY = 'groceryApp.groceries'

function App() {
  const [groceries, setGroceries] = useState([])
  const groceryNameRef = useRef()
  const groceryNumRef = useRef()

  useEffect(() => {
    const storedGroceries = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedGroceries) setGroceries(storedGroceries)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(groceries))
  }, [groceries])

  function handleAddGrocery(e) {
    const name = groceryNameRef.current.value
    const num = groceryNumRef.current.value
    if (name === '') return
    setGroceries(prevGroceries => {
      return [...prevGroceries, { id: uuidv4(), name: name, num: num}]
    })
    groceryNameRef.current.value = null
    groceryNumRef.current.value = null
  }

  function handleClearGroceryList(e) {
    setGroceries([])
  }

  function removeGrocery(id) {
    const newGroceries = groceries.filter(grocery => grocery.id !== id)
    setGroceries(newGroceries)
  }


  return (
    <>
      <div className='title'>
        <span className='title--text'>Groceries</span>
      </div>
      <GroceryList groceries={groceries} removeGrocery={removeGrocery} />
      <input ref={groceryNumRef} className='input--number' type='text' />
      <input ref={groceryNameRef} type='text' />
      <button onClick={handleAddGrocery}>Add Item</button>
      <br />
      <button onClick={handleClearGroceryList}>Clear List</button>
    </>
  );
}

export default App;
