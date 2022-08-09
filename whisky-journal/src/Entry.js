import React, { useState } from 'react'
import EntryInfo from './EntryInfo'

export default function Entry({ entry, toggleSelected }) {

  const [ display, setDisplay ] = useState('none')
  
  function handleSelectEntry() {
    if (display === 'none') {
      setDisplay('block')
      console.log('selected ' + entry.name)
    } else {
      setDisplay('none')
      console.log('unselected ' + entry.name)
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
