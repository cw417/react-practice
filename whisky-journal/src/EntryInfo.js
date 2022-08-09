import React from 'react'

export default function EntryInfo({ entry }) {
  return (
    <div className='pad-left'>
      {entry.name}
      {entry.date}
    </div>
  )
}
