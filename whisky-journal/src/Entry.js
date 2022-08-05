import React, { useState } from 'react'
import EntryInfo from './EntryInfo'

export default function Entry({ entry, selectEntry }) {

  const [ display, setDisplay ] = useState('none')
  
  function handleSelectEntry() {
    console.log('selected')
    selectEntry(entry.id)
    if (display === 'none') {
      setDisplay('block')
    } else {
      setDisplay('none')
    }
    }

  return (
    <div>
      <span>- {entry.name}</span>
      <span className='container--selectEntry'>
        <button className='container--selectEntry__button' onClick={handleSelectEntry}>Select</button>
      </span>
      <div style={{display:display}}>
        <EntryInfo entry={entry} />
      </div>
    </div>
  )
}
