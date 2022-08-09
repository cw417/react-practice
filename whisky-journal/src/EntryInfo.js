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

  function handleAddInfo(entry) {
    const newNose = [...entry.nose]
    const newPalate = [...entry.palate]
    const newFinish = [...entry.finish]
    if (newNose === '' && newPalate === '' && newFinish === '') return

  }
  return (
    <div className='flex pad-left'>
      <div style={{display:display}}>
        <input ref={noseRef} placeholder='Nose' type='text' /> <br />
        <input ref={palateRef} placeholder='Palate' type='text' /> <br />
        <input ref={finishRef} placeholder='Finish' type='text' /> <br />
        <button >Add Info</button>
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
