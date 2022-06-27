import React from 'react'

import './AddApplication.css'

export default function AddApplication ({
  columns
}) {
  function addApplication () {
    const form = document.querySelectorAll('.form')
    const body = {}
    form.forEach((el) => {
      body[el.id] = el.value
    })
    // TODO finish fetch request
    /*
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: (JSON.stringify(body))
    })
    */
  }

  const inputs = columns.map((column, i) => <td key={`input${i}`}><input type="text" id={column} className="form" /></td>)

  return (
    <tr>
      {inputs}
      <td><button onClick={addApplication}>Submit</button></td>
    </tr>
  )
}
