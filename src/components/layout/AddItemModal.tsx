import React, { useState } from 'react';
import { X } from 'lucide-react';
import { TeamForm } from '../teams/TeamForm';

type AddItemModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type ModalView = 'menu' | 'team' | 'workflow' | 'audit' | 'upcoming' | 'incident' | 'kpi';

export const AddItemModal: React.FC<AddItemModalProps> = ({ isOpen, onClose }) => {
  const [view, setView] = useState<ModalView>('menu');

  const menuItems = [
    { id: 'team', label: 'New Team' },
    { id: 'workflow', label: 'New Workflow' },
    { id: 'audit', label: 'New Audit' },
    { id: 'upcoming', label: 'New Upcoming Date' },
    { id: 'incident', label: 'New Incident' },
    { id: 'kpi', label: 'New KPI' },
  ];

  const handleClose = () => {
    setView('menu');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={handleClose} />
        </div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                {view === 'menu' ? 'Add New Item' : menuItems.find(item => item.id === view)?.label}
              </h3>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {view === 'menu' ? (
              <div className="grid gap-3">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setView(item.id as ModalView)}
                    className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 rounded-md border"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            ) : view === 'team' ? (
              <TeamForm onClose={handleClose} />
            ) : (
              <div className="text-center py-4">
                <p className="text-gray-500">Form for {view} coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};