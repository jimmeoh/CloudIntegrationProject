import React from 'react';
import './App.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

function App() {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
  };

  const center = {
    lat: 40.7128, // Replace with your desired latitude
    lng: -74.0060, // Replace with your desired longitude
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Landing Page</h1>
        <p>
          We're excited to have you here! This is a simple React landing page example with a Google Map.
        </p>
        <div style={mapContainerStyle}>
          <LoadScript
            googleMapsApiKey="AIzaSyBIG-EfU8abujPEADGb2HDzPLJlEapQiVQ"
          >
            <GoogleMap
              mapContainerStyle={{
                width: '80%', 
                height: '80%', 
              }}
              zoom={10}
              center={center}
            >
              
            </GoogleMap>
          </LoadScript>
        </div>
       
      </header>
    </div>
  );
}

export default App;
