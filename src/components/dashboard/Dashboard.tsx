import React from 'react';
import { DashboardMetrics } from './DashboardMetrics';
import { NavigationCards } from './NavigationCards';
import { ActivityFeed } from './ActivityFeed';
import { WorkflowChart } from './WorkflowChart';

export const Dashboard: React.FC = () => {
  return (
    <div 
      className="space-y-6"
      style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(229, 231, 235) 1px, transparent 0)',
        backgroundSize: '20px 20px'
      }}
    >
      <NavigationCards />
      
      <DashboardMetrics />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <WorkflowChart />
        </div>
        
        <div className="lg:col-span-1">
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
};