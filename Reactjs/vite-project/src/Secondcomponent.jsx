import React, { useState } from 'react'

const Secondcomponent = () => {
    //hooks
    const [name,setName] = useState("ABCD")
    const [count,setCount] = useState(0)
    const [arr,setArr] = useState([])
    const addName = ()=>{
        setName("xyz")
    }
    const minusCounter = ()=>{
        setCount(count-1)
    }
  return (
    <div>
      <h3>Name is -- {name} </h3>
      <button onClick={addName}>Add</button>
      <h4>Count is -- {count}</h4>
      <button onClick={()=>setCount(count+1)}>Add</button>
      <button onClick={minusCounter}>Minus</button>

    </div>
  )
}

export default Secondcomponent
