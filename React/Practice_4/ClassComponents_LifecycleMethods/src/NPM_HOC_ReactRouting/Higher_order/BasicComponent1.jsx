import React, {useState} from 'react'
import HOC from './HOC'

const BasicComponent1 = ({count, increment}) => {
    // let [count, setCount]=useState(0)
    // let increment=()=>{
    //     setCount(++count);
    // }
  return (
    <div>
        <h2>Basic Component 1</h2>
        <h1>{count}</h1>
        <button onMouseEnter={increment}>Hover over button to increment</button>
    </div>
  )
}

export default HOC(BasicComponent1)
