import React, { useEffect, useRef, useState } from 'react'
import { BarChartData } from "../data/Barchart";
import { Bar, Line } from 'react-chartjs-2';
import DummyData from '../data/dummy';
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import { Truck, Clock, DollarSign, Users } from "lucide-react";
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  BarElement,
  LineElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Overview() {

  const mapRef = useRef(null)

  const instanceOfMap = useRef(null)

  const [shipment, setshipment] = useState([null, null])

  const statCards = [
    { 
      icon: <Truck size={24} />, 
      label: "Total Shipments", 
      value: "500" 
    },
    { 
      icon: <Clock size={24} />, 
      label: "Pending Orders", 
      value: "15" 
    },
    { 
      icon: <DollarSign size={24} />, 
      label: "Revenue", 
      value: "$50,000" 
    },
    { 
      icon: <Users size={24} />, 
      label: "Total Clients", 
      value: "120" 
    }
  ];
  

  useEffect(() => {

    if (!instanceOfMap.current && mapRef.current) {
       instanceOfMap.current = L.map(mapRef.current).setView([0,0], 4);
       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
           attribution: '&copy; OpenStreetMap contributors'
       }).addTo(instanceOfMap.current);
    }

    if (shipment[0] !== null && shipment[1] !== null) {

      instanceOfMap.current.setView(shipment, 13);

      // Ensure marker is only added when valid coordinates exist
      const marker = L.marker(shipment).addTo(instanceOfMap.current);
      return () => {
        instanceOfMap.current.removeLayer(marker); // Clean up previous markers
      };
    }
  }, [shipment]);

  const handleClick = (location) => {
    console.log(location);
    setshipment([location.lat, location.lng]); 
  };
 

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        displayColors: false,
        backgroundColor: 'white',
        titleColor: 'black',
        bodyColor: 'black',
        borderColor: '#dddddd',
        borderWidth: 1,
      },
    },
    scales: {
      x: { 
        grid: { display: false }, 
        ticks: { color: '#999' } 
      },
      y: { 
        beginAtZero: true, 
        grid: { color: 'rgba(255, 255, 255, 0.1)' } 
      },
    },
  };
  


  return (

    <div className="main-content">
    
        
        {/* Stats Cards */}
        <div className="stats-container">
        {statCards.map(({ icon, label, value }) => (
               <div className='stat-card'>
                  <div className='stat-card-icon'>{icon}</div>
                    <div className='stat-card-label'>{label}</div>
                    <div className='stat-card-value'>{value}</div>
                     
               </div>
            ))}
        </div>
        
        {/* Charts Container */}
        <div className="charts-container">


        {/* Shipment Map Placeholder */}
        <div className="chart-card">
            <h3>Shipment Tracking Map</h3>
            
            <div className='Map'>
            
            <div className="map-selector">
              {
                DummyData.map((item) => (
                   <div key={item.userId} className='selector' onClick={() => handleClick(item.trackingInfo.currentPosition)}>
                     <div>
                       <h3>{item.name}</h3>
                       <p>{item.trackingInfo.trackingNumber}</p>
                     </div>

                      <h3 className={`status ${item.trackingInfo.status}`}>
                        {item.trackingInfo.status}
                      </h3>

                   </div>
                ))
              }
            </div>
            <div className="map-placeholder">
            {shipment[0] === null || shipment[1] === null ? (
                <h2 className='error-map'>Choose a location to display</h2>
              ) : (
                <div ref={mapRef} style={{ height: '400px' }} />
              )}
            </div>

            </div>
        </div>
        
        {/* Shipments Line Chart */}

        <div className="chart-container">
        <h3>Shipments Overview</h3>
        <div className="chart-wrapper">
          <Bar data={BarChartData} options={options} />
        </div>
      </div>
       
        </div>
  </div>  
  
  )
}

export default Overview