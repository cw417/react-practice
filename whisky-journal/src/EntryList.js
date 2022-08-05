import React from 'react'
import Entry from './Entry'

export default function EntryList({ entries, selectEntry }) {
  return (
    entries.map(entry => {
      return (
        <Entry
          key={entry.id}
          entry={entry}
          selectEntry={selectEntry}
        />
      )
    })
  )
}
