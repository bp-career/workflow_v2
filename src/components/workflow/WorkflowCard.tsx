import React from 'react';
import { Clock, AlertTriangle } from 'lucide-react';
import type { Workflow } from '../../types/workflow';
import { format } from 'date-fns';

interface WorkflowCardProps {
  workflow: Workflow;
  onClick: (workflow: Workflow) => void;
}

export const WorkflowCard: React.FC<WorkflowCardProps> = ({ workflow, onClick }) => {
  const completedSteps = workflow.steps.filter(step => step.status === 'completed').length;
  const progress = (completedSteps / workflow.steps.length) * 100;

  return (
    <div 
      onClick={() => onClick(workflow)}
      className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{workflow.title}</h3>
          <p className="text-sm text-gray-500">{workflow.department}</p>
        </div>
        <span className={`px-2 py-1 text-xs rounded-full ${
          workflow.priority === 'high' ? 'bg-red-100 text-red-800' :
          workflow.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
          'bg-green-100 text-green-800'
        }`}>
          {workflow.priority}
        </span>
      </div>

      <div className="mb-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full" 
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-sm text-gray-500 mt-1">
          <span>{completedSteps} of {workflow.steps.length} steps</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          <span>Updated {format(workflow.updatedAt, 'MMM d, yyyy')}</span>
        </div>
        {workflow.steps.some(step => step.status === 'blocked') && (
          <div className="flex items-center text-red-500">
            <AlertTriangle className="w-4 h-4 mr-1" />
            <span>Blocked</span>
          </div>
        )}
      </div>
    </div>
  );
};