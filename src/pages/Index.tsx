import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import DashboardStats from '../components/DashboardStats';
import WeatherCard from '../components/WeatherCard';

const Index = () => {
  return (
      <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Dashboard Section */}
      <section id="dashboard" className="py-16">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-8">Farm Analytics</h2>
          <DashboardStats />
          
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <WeatherCard />
            {/* More cards can be added here */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
