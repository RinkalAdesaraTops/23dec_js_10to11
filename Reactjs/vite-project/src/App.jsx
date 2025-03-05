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
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Usercrud from './Usercrud'
import Menu from './Menu'
import { BrowserRouter, Route, Routes } from 'react-router'
import Contact1 from './Contact1'
import Contact2 from './Contact2'
import UseRefExample from './Hooks/UseRefExample'
import DataExample from './Hooks/DataExample'
import UseContextEx from './Hooks/UseContextEx'
import UseCallback from './Hooks/UseCallback'
import UseMemoExample from './Hooks/UseMemoExample'

function App() {
//  let name = "Test"
//  let age = 26
//  let arr = [10,20,30,40,50]
  return (
   <div>
    {/* <UseCallback /> */}
    {/* <h3>Hello</h3>  */}
    {/* <Menu /> */}
    {/* <BrowserRouter> */}
    {/* <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}>
          <Route path="c1" element={<Contact1 />}/>
          <Route path="c2" element={<Contact2 />}/>
        </Route>


    </Routes> */}
    {/* <UseRefExample /> */}
    {/* <DataExample /> */}
    {/* <UseContextEx /> */}
    {/* </BrowserRouter> */}
    {/* <Firstcomponent myname={name} age={age} myarr={arr}/> */}
    {/* <Secondcomponent /> */}
    {/* <Classcomponent name="test"/> */}
    {/* <LifecycleClass /> */}
    {/* <LifecycleFunction /> */}
    {/* <Crud /> */}
    {/* <Usercrud /> */}
    <UseMemoExample />
   </div>
  )
}

export default App
