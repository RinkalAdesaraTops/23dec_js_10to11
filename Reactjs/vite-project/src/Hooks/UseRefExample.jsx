import React, { useRef } from 'react'
import { useState } from 'react'

const UseRefExample = () => {
    let [count,setCount] = useState(0)
    let a=useRef(10)
    const addCounter = ()=>{
        a.current +=1
        console.log(a);
        setCount(count+1)
    }
  return (
    <div>
        <h3>Count is - {count}</h3>
        <button onClick={addCounter}>Add</button>
        <h3>A is -- {a.current}</h3>
    </div>
  )
}

export default UseRefExample
