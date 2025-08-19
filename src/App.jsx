import { useState } from 'react';
import viteLogo from '/vite.svg';
import Navbar from './components/navbar';
import HeroSection from './components/Hero';
import FeatureSeaction from './components/FeatureSection';
import Workflow from './components/Workflow';
import Pricing from './components/Pricing';


function App() {

  return (
    <div> 
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSeaction />
        <Workflow />
        <Pricing />
        
        {/* Add more components as needed */}


      </div>
      
    </div>
 
    
  )
}

export default App
