import { useState } from 'react'

export default function App() {
  const [bg, setBg] = useState('green')
  return (
    <div>
      <p>APP</p>
      <div className="flex">
        <A bg={bg} onChangeBg={setBg} />
        <B>
          <C bg={bg} />
        </B>
      </div>
    </div>
  )
}

function A({ bg, onChangeBg }) {
  return (
    <div className="aspect-square w-20 bg-blue-100">
      <p>A</p>
      <input
        className="w-3/4"
        type="text"
        value={bg}
        onChange={(e) => onChangeBg(e.target.value)}
      />
    </div>
  )
}

function B({ children }) {
  return (
    <div className="aspect-square w-20 bg-red-100">
      <p>B</p>
      { children }
    </div>
  )
}

function C({ bg }) {
  return (
    <div
      style={{ backgroundColor: bg }}
      className="aspect-square w-14"
    >
      <p>C</p>
    </div>
  )
}
