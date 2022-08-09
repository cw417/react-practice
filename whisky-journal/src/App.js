import './App.css';
import React, { useState, useRef, useEffect } from 'react'
import EntryList from './EntryList';
import { v4 as uuidv4 } from 'uuid'

function App() {

  const [entries, setEntries] = useState([])
  const whiskyNameRef = useRef()

  const LOCAL_STORAGE_KEY = 'whiskzyApp.whiskies'

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedEntries) setEntries(storedEntries)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(entries))
  }, [entries])

  function handleAddEntry() {
    const name = whiskyNameRef.current.value
    if (name === '') return
    setEntries(prevEntries => {
      const now = new Date().toDateString()
      return [...prevEntries, 
        { 
          id: uuidv4(), 
          name: name, 
          date: now, 
          info: { nose: ["nose", "nose1"], palate: ["palate", "palate2"], finish: ["finish"] }, 
          selected: false,
          edit: false
        }
      ]
    })
    whiskyNameRef.current.value = null
  }

  function handleClearAllEntries() {
    setEntries([])
  }

  function toggleSelected(id) {
    const newEntries = [...entries]
    const entry = newEntries.find(entry => entry.id === id)
    entry.complete = !entry.complete
    setEntries(newEntries)
  }

  return (
  <>
    <div>
      <EntryList 
      entries={entries} 
      toggleSelected={toggleSelected}
      />
      <input ref={whiskyNameRef} placeholder='Whisky Name' type='text' />
      <span className='pad-left' >
        <button onClick={handleAddEntry}>Add Item</button>
      </span>
      <div className='container--clearAllEntries'>
        <button onClick={handleClearAllEntries}>Clear All Entries</button>
      </div>
    </div>
  </>
  );
}

export default App;
