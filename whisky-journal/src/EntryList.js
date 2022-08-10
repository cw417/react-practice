import React from 'react'
import Entry from './Entry'

export default function EntryList({ entries, toggleSelected, toggleEditing, addNose, addPalate, addFinish }) {
  return (
    entries.map(entry => {
      return (
        <>
          <Entry
            key={entry.id}
            entry={entry}
            toggleSelected={toggleSelected}
            toggleEditing={toggleEditing}
            addNose={addNose}
            addPalate={addPalate}
            addFinish={addFinish}
          />
        </>
      )
    })
  )
}
