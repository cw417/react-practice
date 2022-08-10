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
          editing: false
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
    entry.selected = !entry.selected
    setEntries(newEntries)
  }

  function toggleEditing(id) {
    const newEntries = [...entries]
    const entry = newEntries.find(entry => entry.id === id)
    entry.editing = !entry.editing
    setEntries(newEntries)
    console.log(entries)
  }
  
  //TODO: Info not being added to info arrays

  function addNose(id, infoArr) {
    const newEntries = [...entries]
    const entry = newEntries.find(entry => entry.id === id)
    entry.info.nose.concat(infoArr)
    setEntries(newEntries)
    console.log(entries)
  }

  function addPalate(id, infoArr) {
    const newEntries = [...entries]
    const entry = newEntries.find(entry => entry.id === id)
    entry.info.palate.concat(infoArr)
    setEntries(newEntries)
  }

  function addFinish(id, infoArr) {
    const newEntries = [...entries]
    const entry = newEntries.find(entry => entry.id === id)
    entry.info.finish.concat(infoArr)
    setEntries(newEntries)
  }

  return (
  <>
    <div>
      <EntryList 
        entries={entries} 
        toggleSelected={toggleSelected}
        toggleEditing={toggleEditing}
        addNose={addNose}
        addPalate={addPalate}
        addFinish={addFinish}
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
