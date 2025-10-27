import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const [power, setPower] = useState(5)
  console.log("app rendered");
  const multipliedValue = count * power
  return (

    <>
      <h1>Main value:{count} </h1>
      <button onClick={() => setCount(count+1)}>Click to Multiply By {power}</button>
      <button onClick={() => (setCount(count)
          , setPower(power+1)
      )}>Raise Power</button>
      <h2>Multiplied Value:{multipliedValue}</h2>
    </>
  )
}

export default App
