import { useState } from 'react'

export default function App() {
  return (
    <div>
      <p>APP</p>
      <div className="flex">
        <A />
        <B />
      </div>
    </div>
  )
}

function A() {
  const [bg, setBg] = useState('green')
  return (
    <div className="aspect-square w-20 bg-blue-100">
      <p>A</p>
      <input
        className="w-3/4"
        type="text"
        value={bg}
        onChange={(e) => setBg(e.target.value)}
      />
    </div>
  )
}

function B() {
  return (
    <div className="aspect-square w-20 bg-red-100">
      <p>B</p>
      <C />
    </div>
  )
}

function C() {
  return (
    <div
      style={{ backgroundColor: 'green' }}
      className="aspect-square w-14"
    >
      <p>C</p>
    </div>
  )
}
