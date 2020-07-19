import React from 'react';
import './App.css';
import LandingPage from './features/LandingPage'

function App() {
  
  return (
    <div>
      <div className="top-bar">
        <h1 style={{fontStyle:"italic",transform:"translateY(60%)",color:"white"}}>Welcome to Socials!</h1>

      </div>
      <div>
        <LandingPage/>
    </div>
    </div>
  );
}

export default App;
