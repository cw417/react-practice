import React, { useState, useRef } from 'react'

export default function EntryInfo({ entry }) {

  const [ display, setDisplay ] = useState('none')
  const noseRef = useRef()
  const palateRef = useRef()
  const finishRef = useRef()

  function formatInfo(arr) {
    if (arr.length === 0) return
    let formatted = arr[0]
    for (let i = 1; i < arr.length; i++) {
      formatted += `, ${arr[i]}`
    }
    return formatted
  }

  function handleEditEntry() {
    if (display === 'none') {
      setDisplay('block')
      console.log('editing ' + entry.name)
    } else {
      setDisplay('none')
      console.log('no longer editing ' + entry.name)
    }
  }

  return (
    <div className='flex pad-left'>
      <div style={{display:display}}>
        <input ref={noseRef} type='text' />
        <input ref={palateRef} type='text' />
        <input ref={finishRef} type='text' />
      </div>
      <div>
        <button onClick={handleEditEntry}>Edit</button>
        <br />
        {entry.date} <br />
        Nose: {formatInfo(entry.info.nose)} <br />
        Palate: {formatInfo(entry.info.palate)} <br />
        Finish: {formatInfo(entry.info.finish)} <br />
      </div>
    </div>
  )
}
