import React from 'react';
import { CheckCircle, Clock, AlertTriangle, TrendingUp } from 'lucide-react';

export const DashboardMetrics: React.FC = () => {
  const metrics = [
    {
      title: 'Tasks',
      value: '24',
      change: '+3',
      icon: CheckCircle,
      color: 'text-green-500',
    },
    {
      title: 'Audits',
      value: '12',
      inProgress: '5',
      icon: Clock,
      color: 'text-blue-500',
    },
    {
      title: 'Workflows',
      value: '8',
      active: '6',
      icon: AlertTriangle,
      color: 'text-purple-500',
    },
    {
      title: 'KPI Score',
      value: '92%',
      change: '+2.5%',
      icon: TrendingUp,
      color: 'text-indigo-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <div key={metric.title} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{metric.title}</p>
              <p className="mt-1 text-3xl font-semibold text-gray-900">{metric.value}</p>
            </div>
            <metric.icon className={`h-8 w-8 ${metric.color}`} />
          </div>
          <div className="mt-4">
            {metric.change && (
              <p className="text-sm text-green-600">
                {metric.change} from last week
              </p>
            )}
            {metric.inProgress && (
              <p className="text-sm text-blue-600">
                {metric.inProgress} in progress
              </p>
            )}
            {metric.active && (
              <p className="text-sm text-purple-600">
                {metric.active} active
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};