import { useState } from 'react'
import './App.css'
import Counter from './Counter'


function App() {
  const [counter, setCounter] = useState(0)

  return (
    <>
           {/* <div onClick={() => 
          setCount((count) => count + 1)}>
          count is {count}
      </div>    */}
      <Counter></Counter>
    </>
  )
}

export default App
