import React from 'react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/src/pexels-loifotos-1660898.jpg')" }}>
      <div className="container px-4 py-16 text-center animate-fade-down">
        <div className="inline-block">
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
            Smart Farming Solutions
          </span>
        </div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl text-gray-900">
          Growing Smarter, <br className="hidden sm:block" />
          Not Harder
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
          Leverage advanced IoT sensors and machine learning to optimize your crop yield. 
          Get real-time insights and recommendations tailored to your farm's conditions.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
            Start Monitoring
          </Button>
          <Button variant="outline" className="text-lg px-8 py-6">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
