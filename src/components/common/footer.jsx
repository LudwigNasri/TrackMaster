import React from 'react'

function Footer() {
  return (
   <footer>
     <div className='footer-container'>

        {/* //footer-section 1 */}
        <div className='footer-section'>
            <div className='footer-logo'>
              <span className="logo-text">◈TrackMaster</span>
            </div>

            <ul className='foot-ul'> 
                <h2>Pages</h2>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>Services</a>
                </li>
                <li>
                    <a href='#'>Refences</a>
                </li>
            </ul>

            <ul className='foot-ul'>
                 <h2>About</h2>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>Services</a>
                </li>
                <li>
                    <a href='#'>Refences</a>
                </li>
            </ul>
            <ul className='foot-ul'>
                 <h2>About</h2>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>Services</a>
                </li>
                <li>
                    <a href='#'>Refences</a>
                </li>
            </ul>
        </div>

        {/* //footer-section-2 */}
        
        <div className='footer-section-2'>
            <div className='subscribe-box'>
                <input className='subscribe-input' type='text'/>
                <button className='subscribe-button'>Subscribe</button>
            </div>
           
            <div className='social-media'>
            <img className='media' src='https://cdn-icons-png.flaticon.com/128/5968/5968764.png'/>
            <img className='media' src='https://cdn-icons-png.flaticon.com/128/1384/1384075.png'/>
            <img className='media' src='https://cdn-icons-png.flaticon.com/128/1384/1384060.png'/>
            <img className='media' src='https://cdn-icons-png.flaticon.com/128/3046/3046121.png'/>

         </div>

        </div>
        

     </div>
     
     <div className='footer-bottom'>
         <h1 className='copy' >
            copyright &copy; 2023 All rights reserved
         </h1>

         <div className='policies'>
            <h1 className='terms'>Terms Of Service</h1>
            <h1>Privacy Policy</h1>
         </div>

         
     </div>

    </footer>
  )
}

export default Footer