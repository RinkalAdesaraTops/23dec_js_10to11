import React from 'react'

const DataExample = () => {
    let name = "TEST"
  return (
    <div>
        <h3>Component 1 called...</h3>
        <h3>Name is -- {name}</h3>
        <Component2 name={name}/>
    </div>
  )
}
const Component2 = ({name})=>{
    return (
        <div>
            <h3>Component 2 called...</h3>
        <Component3 name={name}/>

        </div>
    )
}
const Component3 = ({name})=>{
    return (
        <div>
            <h3>Component 3 called...</h3>
            <Component4 name={name}/>

        </div>
    )
}
const Component4 = ({name})=>{
    return (
        <div>
            <h3>Component 4 called...</h3>
            <h3>Final name is -- {name}</h3>
        </div>
    )
}
export default DataExample
