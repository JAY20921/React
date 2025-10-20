import { useState } from 'react'

import './App.css'

function App() {
  let [counter,setCounter] = useState(10)
    let [message, setMessage] = useState("")
// let counter = 5;
const addValue = () =>{
  if(counter>=20){
    setMessage("Counter reached max Val")
    return;
  }
  setCounter((counter) => counter + 1);
  setCounter((counter) => counter + 1);
  setMessage("")
 console.log("value added", counter);
};
const decValue = () =>{
  if(counter<=0){
    setMessage("Counter reached max Val")
    return;
  }
  setCounter(counter-1);
  setMessage("");
 console.log("value subtracted", counter);
};


  return (
    <>
      <h1>Chai</h1>
      <h2>Counter Value :{counter}</h2>
      <button onClick={addValue}>Add Value</button>
     
      <button onClick={decValue}>Decrease Value</button>
      {message && <p style={{ color: "red" }}>{message}</p>}
    </>
  )
}

export default App
