import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { setState } from 'react'
// when user clicks on row notes, will pop up
// need to access redux store for changes or updates

export default function Notes () {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => setText(e.target.value)

  const handleKeyDown = (e) => {
    const trimInput = e.target.value.trim()
    if (e.key === 'Enter' && trimInput) {
      dispatch({ type: 'noteAdded', payload: trimInput })
      setText('')
    }
  }
  return (

    <textarea
      type="text"
      placeholder="Press Enter to Save"
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  )
}
