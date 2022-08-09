import React from 'react'

export default function EntryInfo({ entry }) {

function formatInfo(arr) {
  if (arr.length === 0) return
  let formatted = arr[0]
  for (let i = 1; i < arr.length; i++) {
    formatted += `, ${arr[i]}`
  }
return formatted
  
}

  return (
    <div className='pad-left'>
      {entry.name} <br />
      {entry.date} <br />
      Nose: {formatInfo(entry.info.nose)} <br />
      Palate: {formatInfo(entry.info.palate)} <br />
      Finish: {formatInfo(entry.info.finish)} <br />
    </div>
  )
}
