// import { useState } from 'react'
import {lazy,Suspense} from 'react' 
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Message from './Message'
import FakeApiExample from './FakeApiExample'
import ApiCRUD from './ApiCRUD'
// import Contact from './Contact'
const Home = lazy(()=>import('./Home'))
const Contact = lazy(()=>import('./Contact'))
function App() {
  return (
    <>
    
    {/* <Suspense fallback={<Message />}>
      <Contact />
    </Suspense>
    <Suspense fallback={<div>Home component loading..</div>}>
      <Home />
    </Suspense> */}
    {/* <FakeApiExample /> */}
    <ApiCRUD />
    </>
  )
}

export default App
