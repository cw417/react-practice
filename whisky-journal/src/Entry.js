import React, { useState } from 'react'
import EntryInfo from './EntryInfo'

export default function Entry({ entry, selectEntry, toggleSelected }) {

  const [ display, setDisplay ] = useState('none')
  
  function handleSelectEntry() {
    console.log('selected')
    selectEntry(entry.id)
    if (display === 'none') {
      setDisplay('block')
    } else {
      setDisplay('none')
    }
    toggleSelected(entry.id)
    }

  return (
    <div>
      <span>- {entry.name}</span>
      <span className='pad-left'>
        <input type='checkbox' onClick={handleSelectEntry} />
      </span>
      <div style={{display:display}}>
        <EntryInfo entry={entry} />
      </div>
    </div>
  )
}
