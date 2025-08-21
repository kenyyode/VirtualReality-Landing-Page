import { useState } from 'react';
import viteLogo from '/vite.svg';
import Navbar from './components/navbar';
import HeroSection from './components/Hero';
import FeatureSeaction from './components/FeatureSection';
import Workflow from './components/Workflow';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';


function App() {

  return (
    <div> 
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSeaction />
        <Workflow />
        <Pricing />
        <Testimonials />
        
        
        
        {/* Add more components as needed */}


      </div>
      <Footer />
      
    </div>
 
    
  )
}

export default App
