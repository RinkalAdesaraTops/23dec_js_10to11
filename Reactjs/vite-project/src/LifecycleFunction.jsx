import React, { useEffect, useState } from 'react'

const LifecycleFunction = () => {
    const [num,setNum] = useState(1)
    useEffect(()=>{
        setTimeout(()=>{
            setNum(num+1)
        },3000)
    },[])
  return (
    <div>
      <h3>Num is-- {num} </h3>
    </div>
  )
}
export default LifecycleFunction
