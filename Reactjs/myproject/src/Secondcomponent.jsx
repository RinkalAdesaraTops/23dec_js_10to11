import React from 'react'

const Secondcomponent = () => {
    let arr = [10,20,30,40,50]
    let data = arr.map((i,index)=> <li key={index}>{i}</li> )
    
  return (
    <div>
      <h4>Second Component Called..</h4>
      {/* <h4>Array is -- {arr[2]}</h4> */}
      <ul>{data}
        {/* {
            arr.map((i)=> <li>{i}</li> )
        } */}
      </ul>
    </div>
  )
}

export default Secondcomponent
