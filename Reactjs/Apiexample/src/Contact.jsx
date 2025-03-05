import React, { useEffect, useState } from 'react'

const Contact = () => {
    let [count,setCount] = useState(0)
    useEffect(()=>{
        for(let i=1;i<100000000;i++){
            count+=i
        }   
        setCount(count)
    },[])
  return (
    <div>
      <h3>Count is -- {count}</h3>
    </div>
  )
}

export default Contact
