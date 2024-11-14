import React from 'react';
import { DollarSign, ArrowUpRight, ArrowDownRight, Activity } from 'lucide-react';

const stats = [
  {
    label: 'Portfolio Value',
    value: '$45,678.90',
    change: '+12.34%',
    positive: true,
    icon: DollarSign
  },
  {
    label: 'Today\'s Return',
    value: '$1,234.56',
    change: '+5.67%',
    positive: true,
    icon: ArrowUpRight
  },
  {
    label: 'Total Investment',
    value: '$38,900.00',
    change: '-2.34%',
    positive: false,
    icon: ArrowDownRight
  },
  {
    label: 'Active Positions',
    value: '12',
    change: '+2',
    positive: true,
    icon: Activity
  }
];

export default function PortfolioStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <stat.icon className="w-6 h-6 text-blue-500" />
            </div>
            <span className={`text-sm font-medium ${
              stat.positive ? 'text-green-500' : 'text-red-500'
            }`}>
              {stat.change}
            </span>
          </div>
          <h3 className="text-gray-500 text-sm">{stat.label}</h3>
          <p className="text-2xl font-semibold mt-1">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}