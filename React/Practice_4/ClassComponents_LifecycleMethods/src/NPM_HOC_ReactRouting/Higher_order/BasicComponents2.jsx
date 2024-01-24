import React, {useState} from 'react'
import HOC from './HOC'
const BasicComponent2 = ({count, increment}) => {
    // let [count, setCount]=useState(0)
    // let increment=()=>{
    //     setCount(++count);
    // }
  return (
    <div>
        <h2>Basic Component 2</h2>
        <h1>{count}</h1>
        <button onClick={increment}>Click to increment</button>
    </div>
  )
}

export default HOC(BasicComponent2)
