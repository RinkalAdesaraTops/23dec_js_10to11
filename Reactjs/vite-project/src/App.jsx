import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Firstcomponent from './Firstcomponent'
import Secondcomponent from './Secondcomponent'

function App() {
 let name = "Test"
 let age = 26
 let arr = [10,20,30,40,50]
  return (
   <div>
    <h3>Hello</h3> 
    {/* <Firstcomponent myname={name} age={age} myarr={arr}/> */}
    <Secondcomponent />
   </div>
  )
}

export default App
