
import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <span className="text-xl font-semibold text-primary">GrowGuide</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#dashboard" className="text-gray-600 hover:text-primary transition-colors">Dashboard</a>
            <a href="#weather" className="text-gray-600 hover:text-primary transition-colors">Weather</a>
            <a href="#analysis" className="text-gray-600 hover:text-primary transition-colors">Analysis</a>
            <Button variant="default" className="bg-primary hover:bg-primary/90">Get Started</Button>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
