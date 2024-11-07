import { useState, createContext, useContext } from 'react'

const BgContext = createContext('green')

export default function App() {
  const [bg, setBg] = useState('green')
  return (
    <BgContext.Provider value={bg}>
      <p>APP</p>
      <div className="flex">
        <A onChangeBg={setBg} />
        <B />
      </div>
    </BgContext.Provider>
  )
}

function A({ onChangeBg }) {
  const bg = useContext(BgContext)
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

function B() {
  return (
    <div className="aspect-square w-20 bg-red-100">
      <p>B</p>
      <C />
    </div>
  )
}

function C() {
  const bg = useContext(BgContext)
  return (
    <div
      style={{ backgroundColor: bg }}
      className="aspect-square w-14"
    >
      <p>C</p>
    </div>
  )
}
