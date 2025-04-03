import React from "react";
import "../../App.css"

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="feature-card">
      <div className="icon-container">
        <Icon className="icon" size={24} />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
  
  export default FeatureCard;
  