import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(() => {
    axios.get('/api/jokes')
      .then(response => {
        setJokes(response.data)
      })
      .catch(error => {
        console.error('There was an error fetching the jokes!', error)
      })
  })
return (
   <>
<h1 className="text-center text-5xl font-extrabold text-purple-600 font-serif drop-shadow-lg">
  Jokes
</h1>
<p>Jokes: {jokes.length}</p>
{
  jokes.map((joke) => (
    <div key={joke.id}>
      <h3>{joke.title}</h3>
      <p>{joke.content}</p>
    </div>
  )
  )
}




   </>
  )
}

export default App
