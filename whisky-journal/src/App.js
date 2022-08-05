import './App.css';
import React, { useState, useRef, useEffect } from 'react'
import EntryList from './EntryList';
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [entries, setEntries] = useState([])
  const whiskyNameRef = useRef()

  const LOCAL_STORAGE_KEY = 'whiskyApp.whiskies'

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedEntries) setEntries(storedEntries)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(entries))
  }, [entries])

  function handleAddEntry(e) {
    const name = whiskyNameRef.current.value
    if (name === '') return
    setEntries(prevEntries => {
      return [...prevEntries, { id: uuidv4(), name: name }]
    })
    whiskyNameRef.current.value = null
  }

  function selectEntry(id) {
    console.log('selectEntry')
  }

  return (
  <>
    <div className='container--entryList'>
      <EntryList entries={entries} selectEntry={selectEntry} />
      <input ref={whiskyNameRef} type='text' />
      <span className='container--add-item'>
        <button className='container--add-item__button' onClick={handleAddEntry}>Add Item</button>
      </span>
    </div>
  </>
  );
}

export default App;
