import { useState } from 'react'  
import './App.css'
function Count()

{
  const [count, setCount] = useState(0)
  const bgColor=count>5?"lightgreen":"lightcoral"
  return (
    <div className="App" style={{backgroundColor:bgColor,minHeight:"100vh",padding:"20px"}}>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      
    </div>
  )
}
export default Count 

   