
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Droplet, Thermometer, Timer } from 'lucide-react';

const DashboardStats = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3 animate-fade-up">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Soil Moisture</CardTitle>
          <Droplet className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">45%</div>
          <p className="text-xs text-muted-foreground">Optimal range: 40-60%</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Soil Temperature</CardTitle>
          <Thermometer className="h-4 w-4 text-secondary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">22°C</div>
          <p className="text-xs text-muted-foreground">Optimal range: 20-25°C</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Last Updated</CardTitle>
          <Timer className="h-4 w-4 text-accent" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">5m ago</div>
          <p className="text-xs text-muted-foreground">Real-time monitoring</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
