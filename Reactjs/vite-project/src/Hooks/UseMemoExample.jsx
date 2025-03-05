import React, { useMemo, useState } from 'react'

const UseMemoExample = () => {
    let [count,setCount] = useState(0)
    let [num,setNum] = useState(0)
    
    const calcFunc = (n)=>{
        console.log("calc function called..");       
        for(let i=1;i<=1000;i++){
            n+=i
        }
        return n
    }
    const addCounter = ()=>{
        console.log("counter func called..");       
        setCount(count+1)
    }
    const addNum = ()=>{
        console.log("Number func called..");
        setNum(num+10)
    }
    let calc = useMemo(()=>{
        return calcFunc(count)
    },[count])
  return (
    <div>
      <h3>Count is -- {count}</h3>
      <button onClick={addCounter}>Add Counter</button>
      <h3>Number is -- {num}</h3>
      <button onClick={addNum}>Add Number</button>
      <h3>Calc is -- {calc}</h3>
    </div>
  )
}

export default UseMemoExample
