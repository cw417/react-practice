import React, { useState, useRef } from 'react'

export default function EntryInfo({ entry, toggleEditing, addNose, addPalate, addFinish }) {

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

  function formatAddInfo(s) {
    // returns array of formatted info strings
    let info = []
    s.split(',').forEach(item => info.push(item.trim()))
    console.log(info)
    return info
  }

  function handleEditEntry() {
    if (display === 'none') {
      setDisplay('block')
      console.log('editing ' + entry.name)
    } else {
      setDisplay('none')
      console.log('no longer editing ' + entry.name)
    } 
    toggleEditing(entry.id)
  }

  function handleAddInfo() {
    const nose = noseRef.current.value
    const palate = palateRef.current.value
    const finish = finishRef.current.value
    if (nose !== '') {
      addNose(entry.id, formatAddInfo(nose))
    }
    if (palate !== '') {
      addPalate(entry.id, formatAddInfo(palate))
    }
    if (finish !== '') {
      addFinish(entry.id, formatAddInfo(finish))
    }
  }

  return (
    <div className='flex pad-left'>
      <div style={{display:display}}>
        <input ref={noseRef} placeholder='Nose' type='text' /> <br />
        <input ref={palateRef} placeholder='Palate' type='text' /> <br />
        <input ref={finishRef} placeholder='Finish' type='text' /> <br />
        <button onClick={handleAddInfo}>Add Info</button>
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
