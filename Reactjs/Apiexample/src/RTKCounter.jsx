import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './RTK/RtkCounterReducer'

const RTKCounter = () => {
    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()
  return (
    <div>
      <h3>counter is --  {count}</h3>
      <button onClick={()=>dispatch(increment())}>Add</button>
      <button onClick={()=>dispatch(decrement())}>Minus</button>
    </div>
  )
}

export default RTKCounter
