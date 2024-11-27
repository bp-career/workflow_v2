import React from 'react';
import { MessageSquare, AlertCircle, CheckCircle, Clock } from 'lucide-react';

export const ActivityFeed: React.FC = () => {
  const activities = [
    {
      type: 'message',
      content: 'New message from Sarah: "Updated the Q1 audit report"',
      time: '5m ago',
      icon: MessageSquare,
      color: 'text-blue-500',
    },
    {
      type: 'incident',
      content: 'Critical incident reported in Production Workflow',
      time: '15m ago',
      icon: AlertCircle,
      color: 'text-red-500',
    },
    {
      type: 'completion',
      content: 'Team Alpha completed their weekly KPI targets',
      time: '1h ago',
      icon: CheckCircle,
      color: 'text-green-500',
    },
    {
      type: 'reminder',
      content: 'Monthly compliance audit due in 2 days',
      time: '2h ago',
      icon: Clock,
      color: 'text-yellow-500',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
      </div>
      <div className="border-t border-gray-200">
        <ul className="divide-y divide-gray-200">
          {activities.map((activity, index) => (
            <li key={index} className="px-4 py-4 sm:px-6">
              <div className="flex items-center space-x-4">
                <div className={`flex-shrink-0 ${activity.color}`}>
                  <activity.icon className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{activity.content}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};