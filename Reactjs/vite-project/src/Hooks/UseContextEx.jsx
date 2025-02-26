import React, { createContext, useContext } from 'react'
let Userdata = createContext()
const UseContextEx = () => {
    let name = "ABCD"
  return (
     <div>
       <h3>Component 1 called...</h3>
       <h3>Name is -- {name}</h3>
       <Userdata.Provider value={name}>
       <Component2 />
       </Userdata.Provider>
    </div>
  )
}
const Component2 = ()=>{
    return (
        <div>
            <h3>Component 2 called...</h3>
        <Component3 />

        </div>
    )
}
const Component3 = ()=>{
    return (
        <div>
            <h3>Component 3 called...</h3>
            <Component4 />

        </div>
    )
}
const Component4 = ()=>{
    let name = useContext(Userdata)
    return (
        <div>
            <h3>Component 4 called...</h3>
            <h3>Final name is -- {name}</h3>
        </div>
    )
}
export default UseContextEx
