import React from 'react'
import Entry from './Entry'

export default function EntryList({ entries, toggleSelected }) {
  return (
    entries.map(entry => {
      return (
        <>
          <Entry
          key={entry.id}
          entry={entry}
          toggleSelected={toggleSelected}
          />
        </>
      )
    })
  )
}
