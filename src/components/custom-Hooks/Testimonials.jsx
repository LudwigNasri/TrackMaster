import React from 'react';
import { useState } from 'react';
import "../../App.css"
import { useEffect } from 'react';

const TestimonialCard = ({ quote, author, role }) => {

    const testimonials = [
        {
          quote: "TrackMaster has revolutionized how we manage our fleet operations. The real-time insights are invaluable.",
          name: "Sarah Johnson",
          title: "Fleet Manager, Global Logistics Inc."
        },
        {
          quote: "The ease of use and powerful features make this the best tracking solution we've ever used.",
          name: "Michael Chen",
          title: "Operations Director, FastTrack"
        },
        {
          quote: "Outstanding support team and reliable platform. Couldn't be happier with our choice.",
          name: "Emma Williams",
          title: "CEO, Smart Transit"
        }
      ];

      const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
   <div className="testimonials-container">
      <h1 className="testimonials-heading">Trusted by industry leaders</h1>
      
      <div className="testimonials-slider">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
          >
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <div className="testimonial-author">
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-title">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="testimonials-dots">
        {testimonials.map((_, index) => (
          <button 
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`View testimonial ${index + 1}`}
          />
        ))}
    </div>
    </div>

  );
};

export default TestimonialCard;
