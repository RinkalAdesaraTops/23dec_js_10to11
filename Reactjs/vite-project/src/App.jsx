import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Firstcomponent from './Firstcomponent'
import Secondcomponent from './Secondcomponent'
import Classcomponent from './Classcomponent'
import LifecycleClass from './LifecycleClass'
import LifecycleFunction from './LifecycleFunction'
import Crud from './Crud'
import Usercrud from './Usercrud'

function App() {
 let name = "Test"
 let age = 26
 let arr = [10,20,30,40,50]
  return (
   <div>
    <h3>Hello</h3> 
    {/* <Firstcomponent myname={name} age={age} myarr={arr}/> */}
    {/* <Secondcomponent /> */}
    {/* <Classcomponent name="test"/> */}
    {/* <LifecycleClass /> */}
    {/* <LifecycleFunction /> */}
    {/* <Crud /> */}
    <Usercrud />
   </div>
  )
}

export default App
