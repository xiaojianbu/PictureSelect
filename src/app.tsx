import React from 'react'
import './style.less'

interface IProps {
  name: string
  age: number
}

function App(props: IProps) {
  const { name, age } = props
  return (
    <div className="app">
      <span>{`Hello! I'm ${name}, ${age} years 11old.`}</span>
    </div>
  )
}

export default App
