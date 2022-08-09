import React from 'react'
import Entry from './Entry'

export default function EntryList({ entries }) {
  return (
    entries.map(entry => {
      return (
        <Entry
          key={entry.id}
          entry={entry}
        />
      )
    })
  )
}
