import React from 'react'
import { useState } from 'react'

function Header({setSideOpen, sideOpen}) {


  const toogle = () => {
    setSideOpen(!sideOpen)
    console.log(sideOpen)
  }

  return (
       <div className="dashboard-header">
         <img className='hamburg-header' onClick={toogle} src='https://cdn-icons-png.flaticon.com/128/9534/9534295.png' />
          <h2>Dashboard</h2>

          <div className='profile-area'>
            <input type="text" placeholder="Search..." />
            <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="User Profile" />
          </div>


          
        </div>  )
}

export default Header