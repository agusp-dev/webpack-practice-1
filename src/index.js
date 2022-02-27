import React from 'react'
import ReactDOM from 'react-dom'

const obj = {
  id: 1,
  name: 'Agustin'
}

console.table(obj?.age ?? 'string')

ReactDOM.render(
  <p>Hi React.js!!!aaa</p>, 
  document.getElementById('app')
)
