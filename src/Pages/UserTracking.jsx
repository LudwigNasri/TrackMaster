import React from 'react'
import { MapPin, Package, Truck, Clock, CheckCircle, AlertCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { useState } from 'react';

function UserTracking() {

  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingStatus, setTrackingStatus] = useState(false);

  const handleTrackPackage = (e) => {
    e.preventDefault();
    setTrackingStatus(true);
    // Add your tracking logic here
    console.log('Tracking package with number:', trackingNumber);
  };

  return (
     
    <div className="tracking-page">
      <div className='main-container'>
       <div className="page-header">
         <h1>Track Your Package</h1>
         <p>Enter your tracking number to get real-time updates on your shipment</p>
       </div>

       {/* Tracking Form */}
       <div className="tracking-form-container">
         <form onSubmit={handleTrackPackage}>
           <div className="tracking-form">
             <div className="input-container">
               <input
                 type="text"
                 placeholder="Enter tracking number"
                 className="tracking-input"
                 value={trackingNumber}
                 onChange={(e) => setTrackingNumber(e.target.value)}
               />
             </div>
             
             <button type="submit" className="btn-track">
               <Search size={20} className="btn-icon" />
               Track Package
             </button>
           </div>
         </form>
       </div>

       {
         trackingStatus ? (
           <div className="tracking-status">
               <div className="status-container">
                   <h1>{trackingNumber}</h1>
                </div> 
            </div>
         ) : ""
       }

       <div className="help-section">
          <h3 className="help-title">Need Help?</h3>
          <p className="help-text">
            Having trouble tracking your package or have questions about your delivery?
            Our support team is here to help.
          </p>
          <button className="btn-support">Contact Support</button>
        </div>  

     </div>
       
     </div>
      

    
  )
}

export default UserTracking