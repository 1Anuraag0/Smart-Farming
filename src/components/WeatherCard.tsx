
import React from 'react';
import { Cloud, Sun, Thermometer } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const WeatherCard = () => {
  return (
    <Card className="w-full animate-fade-up">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Weather Conditions</CardTitle>
        <Sun className="h-4 w-4 text-accent" />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Thermometer className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-500">Temperature</span>
            </div>
            <span className="text-2xl font-bold">24°C</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Cloud className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-500">Humidity</span>
            </div>
            <span className="text-2xl font-bold">65%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
