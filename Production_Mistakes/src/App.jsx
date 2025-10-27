import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(NaN)

  return (
    <div stylre={{backgroundColor: '#282c34', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: 'calc(10px + 2vmin)', color: 'white'}}>
      <h1>Welcome</h1>
      <button onClick={()=> setisLoggedIn(!isLoggedIn)}>Toggle Login</button>
      <div>
        <h3>&& operator</h3>
        {!!isLoggedIn && <p>You are logged in!</p>}

        <h3>Ternary operator</h3>
        {isLoggedIn ? <p>You are logged in!</p>: <p>You are not logged in.</p>}
      </div>
    </div>
  )
}

export default App
