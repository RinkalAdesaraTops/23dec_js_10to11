import React from 'react'
import { Button } from '@mui/material'
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
      <Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
    </div>
  )
}

export default Secondcomponent
