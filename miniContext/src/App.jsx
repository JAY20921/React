
import './App.css'
import UserContext from './context/UserContext'
import UserContextProvider from './context/ContextProvider'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {

  return (
    <UserContextProvider>
      <h1>ACCOUNT</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
