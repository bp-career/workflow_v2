import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Users, ClipboardList, Calendar, CheckSquare,
  AlertTriangle, Activity, BarChart2, LineChart,
  Plus, ChevronDown, Star, StarOff
} from 'lucide-react';
import { AddItemModal } from './AddItemModal';
import { useStore } from '../../store/sidebarStore';

const navigation = [
  { name: 'Home', icon: Home, href: '/' },
  { name: 'Teams', icon: Users, href: '/teams' },
  { name: 'Workflows', icon: ClipboardList, href: '/workflows' },
  { name: 'Upcoming', icon: Calendar, href: '/upcoming' },
  { name: 'Audits', icon: CheckSquare, href: '/audits' },
  { name: 'Incidents', icon: AlertTriangle, href: '/incidents' },
  { name: 'Performance', icon: Activity, href: '/performance' },
  { name: 'KPIs', icon: BarChart2, href: '/kpis' },
  { name: 'Analytics', icon: LineChart, href: '/analytics' },
];

export const Sidebar: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const { isCollapsed, toggleSidebar } = useStore();

  return (
    <>
      <div className={`fixed inset-y-0 left-0 z-30 transition-all duration-300 transform ${
        isCollapsed ? '-translate-x-full' : 'translate-x-0'
      } lg:relative lg:translate-x-0`}>
        <div className="h-full bg-white w-64 shadow-lg flex flex-col">
          <div className="p-4">
            <button
              onClick={() => setShowAddModal(true)}
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Plus className="h-5 w-5 mr-2" />
              Add
            </button>
          </div>

          <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900"
              >
                <item.icon className="mr-3 h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay for mobile */}
      {!isCollapsed && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <AddItemModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
      />
    </>
  );
};