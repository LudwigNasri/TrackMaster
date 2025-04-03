import React from 'react'
import HeroImage from '../assets/hero-image.png'
import Node from '../assets/node.png'
import dahsboard from '../assets/dashboard.png'
import delivery from "../assets/deliverytruck.png" 
import faq from '../assets/faq.png'
import { useState } from 'react'
import FeatureCard from '../components/custom-Hooks/featureCard.jsx'
import { ArrowRight, Bell, MapPin, Clock } from 'lucide-react';
import TestimonialCard from '../components/custom-Hooks/Testimonials.jsx'
import "../App.css"
import { useNavigate } from 'react-router'


function HomePage() {

  const navigate = useNavigate();

  return (
    <div className='Home-Container'>


      {/* First container */}
         <div className='hero-container'>   
            <div className='hero-content'>
                 <div className='text-content'>
                    <h2 className='hero-title'>
                        Track Everything That Matters
                    </h2>
                    <p className='hero-subtitle'>
                    One powerful platform to track all your assets, activities, and metrics in real-time. Get insights that matter, when they matter.
                    </p>
                    <button className="trial-btn hero-btn" onClick={() => navigate('/tracking')}>
                Start Tracking <ArrowRight className="icon" size={20} />
              </button>
                 </div> 
                 
                 <div className='image-content'>
                    <img className='hero-image' src={HeroImage} />                
                 </div>   
            </div>

        

        </div>


      {/* Second container */}

      <div className="features">
        <div className="features-container">
          <div className="features-header">
            <h2 className="features-heading">Everything you need to stay in control</h2>
            <p className="features-description">
              Powerful features that help you track, analyze, and optimize your operations
            </p>
          </div>
          <div className="feature-cards">
            <FeatureCard
              icon={MapPin}
              title="Real-time Tracking"
              description="Monitor your assets in real-time with precise location tracking and instant status updates"
            />
            <FeatureCard
              icon={Bell}
              title="Smart Notifications"
              description="Get instant alerts when something needs your attention. Customize triggers based on your needs"
            />
            <FeatureCard
              icon={Clock}
              title="Historical Analysis"
              description="Access detailed historical data and trends to make informed decisions"
            />
          </div>
        </div>
      </div>


      {/* Third container */}
 
      <div className='third-container'>

          <div className='third-content'>
              <div className='third-first-container'>
                <h1>All-in-one platform</h1>
                <p>Ship24 offers a comprehensive set of solutions to choose from, covering all of your business’ needs.</p>
              </div>

              <div className='third-second-container'>
                <img src={Node} className='third-second-container-image1' />
                <div className='third-second-container-content'>
                  <h1>Tracking Api Solution</h1>
                  <div>
                      <img src='https://cdn-icons-png.flaticon.com/128/14846/14846423.png' />
                      <p>Ship24's smart API offers comprehensive tracking across more than 1,524 couriers worldwide. With auto-detection and codified status updates, delivering timely and precise tracking. </p>
                    </div>            </div>
              </div>

              <div className='third-second-container2'>
                <div className='third-second-container-content'>
                  <h1>Tracking Api Solution</h1>
                    <div>
                      <img src='https://cdn-icons-png.flaticon.com/128/3247/3247281.png' />
                      <p>Ship24's smart API offers comprehensive tracking across more than 1,524 couriers worldwide. With auto-detection and codified status updates, delivering timely and precise tracking. </p>
                    </div>
                </div>
                <img className='third-second-container-image' src={dahsboard} />
          </div>
          </div>

      </div>

      {/* Fourth container */}

      <div className='fourth-container'>
        <div className='fourth-container-content'>
           <div className='fourth-container-first'>
              <div>
                <h1>Trusted by thousands of businesses worldwide</h1>
                    <div className='trusted-values'>
                      <div className='trusted-values-content'>
                        <h1>5k+</h1>
                        <h3>Happy customers</h3>
                      </div>

                        <div className='trusted-values-content'>
                        <h1>500+</h1>
                        <h3>Global couriers supported</h3>
                      </div>

                      <div className='trusted-values-content'>
                        <h1>10M+</h1>
                        <h3>Shipments tracked</h3>
                      </div>

                      <div className='trusted-values-content'>
                        <h1>70%</h1>
                        <h3>Faster delivery resolution</h3>
                      </div>


                    </div>
              </div>

              
           </div>

             <div className='fourth-container-second'>

                <div className='fourth-second-container-content'>
                  
                    <div className='start-tracking'>
                      <h2>Start tracking your shipments</h2>
                      <button className='trial-button'>Get Started</button>
                    </div>

                    <div>
                      <img className='delivery-img' src={delivery} />
                    </div>

                </div>
             
             </div>

        </div>
      </div>

     <div className='last-container'>
     <TestimonialCard/>

  {/* CTA Section */}
<div className="cta-section">
 <div className="cta-container">
  <div className="cta-content">
    <h2 className="cta-title">Ready to get started?</h2>
    <p className="cta-text">
      Join thousands of companies that trust TrackMaster for their tracking needs
    </p>
    <button className="cta-button">Start Your Free Trial</button>
  </div>
</div>
</div>

     </div>
     

    </div>
  )
}

export default HomePage