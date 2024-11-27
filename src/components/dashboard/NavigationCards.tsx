import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart2, Users, ClipboardList, 
  AlertTriangle, Activity, Calendar, 
  LineChart, CheckSquare 
} from 'lucide-react';

export const NavigationCards: React.FC = () => {
  const cards = [
    { title: 'KPIs', icon: BarChart2, href: '/kpis', color: 'bg-blue-500' },
    { title: 'Performance', icon: Activity, href: '/performance', color: 'bg-green-500' },
    { title: 'Audits', icon: CheckSquare, href: '/audits', color: 'bg-yellow-500' },
    { title: 'Upcoming', icon: Calendar, href: '/upcoming', color: 'bg-purple-500' },
    { title: 'Workflows', icon: ClipboardList, href: '/workflows', color: 'bg-indigo-500' },
    { title: 'Teams', icon: Users, href: '/teams', color: 'bg-pink-500' },
    { title: 'Incidents', icon: AlertTriangle, href: '/incidents', color: 'bg-red-500' },
    { title: 'Analytics', icon: LineChart, href: '/analytics', color: 'bg-cyan-500' },
  ];

  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
      {cards.map((card) => (
        <Link
          key={card.title}
          to={card.href}
          className="flex flex-col items-center"
        >
          <div className={`w-12 h-12 ${card.color} bg-opacity-10 rounded-full flex items-center justify-center mb-2`}>
            <card.icon className={`h-5 w-5 ${card.color.replace('bg-', 'text-')}`} />
          </div>
          <span className="text-xs font-medium text-gray-600">{card.title}</span>
        </Link>
      ))}
    </div>
  );
};