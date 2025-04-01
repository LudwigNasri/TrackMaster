import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'
import Sidebar from './components/sidebar'
import Header from './components/header'
import { Outlet } from 'react-router'

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [sideOpen, setSideOpen] = useState(false)

  return (
    <div className={`dashboard-container ${isMenuOpen ? 'menu-open' : ''}`}>
      <Header setSideOpen={setSideOpen} sideOpen={sideOpen} />
      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} sideOpen={sideOpen} setSideOpen={setSideOpen} />
      <Outlet />
    </div>
  )
}

export default App
