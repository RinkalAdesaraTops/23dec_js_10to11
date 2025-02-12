import React from 'react'

// const Firstcomponent = (props) => {
    const Firstcomponent = ({myname,age,myarr}) => {
  return (
    <div>
      <h3>Name is -- {myname}</h3>
      <h3>Age is -- {age}</h3>
      <ul>
        {
            myarr.map((i)=> <li>{i}</li>)
        }
      </ul>
      {/* <h3>Age is -- {props.age}</h3> */}
      {/* <Secondcomponent /> */}
    </div>
  )
}

export default Firstcomponent
