import React, { useState } from 'react'
import EntryInfo from './EntryInfo'

export default function Entry({ entry }) {

  const [ display, setDisplay ] = useState('none')
  
  function handleSelectEntry() {
    if (display === 'none') {
      setDisplay('block')
      console.log('selected ' + entry.name)
    } else {
      setDisplay('none')
      console.log('unselected ' + entry.name)
    }
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
