import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { format, subDays, subWeeks, subMonths } from 'date-fns';

const generateData = (period: 'daily' | 'weekly' | 'monthly') => {
  const data = [];
  const now = new Date();
  const points = period === 'daily' ? 7 : period === 'weekly' ? 12 : 6;
  
  for (let i = points - 1; i >= 0; i--) {
    const date = period === 'daily' 
      ? subDays(now, i)
      : period === 'weekly'
        ? subWeeks(now, i)
        : subMonths(now, i);
    
    data.push({
      date: format(date, period === 'daily' ? 'MMM d' : period === 'weekly' ? 'MMM d' : 'MMM yyyy'),
      'Production Workflow': Math.floor(Math.random() * 30) + 70,
      'Support Workflow': Math.floor(Math.random() * 20) + 60,
      'Development Workflow': Math.floor(Math.random() * 25) + 65,
    });
  }
  
  return data;
};

export const WorkflowChart: React.FC = () => {
  const [period, setPeriod] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const [selectedWorkflow, setSelectedWorkflow] = useState('all');
  
  const data = generateData(period);
  const workflows = [
    { id: 'all', name: 'All Workflows' },
    { id: 'Production Workflow', name: 'Production' },
    { id: 'Support Workflow', name: 'Support' },
    { id: 'Development Workflow', name: 'Development' },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium text-gray-900">Workflow Performance</h3>
        <div className="flex space-x-4">
          <select
            value={selectedWorkflow}
            onChange={(e) => setSelectedWorkflow(e.target.value)}
            className="block w-40 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            {workflows.map((workflow) => (
              <option key={workflow.id} value={workflow.id}>
                {workflow.name}
              </option>
            ))}
          </select>
          <div className="flex rounded-md shadow-sm">
            {(['daily', 'weekly', 'monthly'] as const).map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-4 py-2 text-sm font-medium ${
                  period === p
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } ${
                  p === 'daily'
                    ? 'rounded-l-md'
                    : p === 'monthly'
                    ? 'rounded-r-md'
                    : ''
                } border border-gray-300`}
              >
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            {(selectedWorkflow === 'all' ? Object.keys(data[0]).filter(key => key !== 'date') : [selectedWorkflow]).map((workflow) => (
              <Line
                key={workflow}
                type="monotone"
                dataKey={workflow}
                stroke={
                  workflow === 'Production Workflow'
                    ? '#4F46E5'
                    : workflow === 'Support Workflow'
                    ? '#10B981'
                    : '#EC4899'
                }
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};