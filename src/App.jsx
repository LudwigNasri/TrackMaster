import { useState } from 'react'
import HomePage from './Pages/HomePage'
import Navbar from "../src/components/common/secondHeader"
import Footer from "./components/common/footer"
import { Outlet } from 'react-router'


function App() {


  return (
     <div className='App'>
      <Navbar/>
        <Outlet/>
       <Footer/> 
      </div>
  )
}

export default App
