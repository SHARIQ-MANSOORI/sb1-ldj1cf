import React from 'react';
import { BarChart2, PieChart, TrendingUp, DollarSign } from 'lucide-react';

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-2">
        <h1 className="text-2xl font-bold">Analytics</h1>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <select className="btn btn-secondary w-full sm:w-auto">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>Last Year</option>
          </select>
          <button className="btn btn-primary w-full sm:w-auto">Generate Report</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Portfolio Performance</h2>
            <BarChart2 className="w-5 h-5 text-gray-400" />
          </div>
          <div className="h-48 sm:h-64 flex items-center justify-center border rounded-lg">
            <p className="text-gray-500 text-sm sm:text-base text-center px-4">Chart will be implemented with Chart.js</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Asset Distribution</h2>
            <PieChart className="w-5 h-5 text-gray-400" />
          </div>
          <div className="h-48 sm:h-64 flex items-center justify-center border rounded-lg">
            <p className="text-gray-500 text-sm sm:text-base text-center px-4">Chart will be implemented with Chart.js</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Top Performers</h2>
            <TrendingUp className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 bg-gray-50 rounded-lg gap-2 sm:gap-0">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <span className="text-lg font-semibold text-gray-400">#{index + 1}</span>
                  <div>
                    <p className="font-medium">Movie Title {index + 1}</p>
                    <p className="text-sm text-gray-500">Studio Name</p>
                  </div>
                </div>
                <div className="text-left sm:text-right w-full sm:w-auto">
                  <p className="font-medium">$123.45</p>
                  <p className="text-sm text-green-500">+12.34%</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Investment Summary</h2>
            <DollarSign className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Total Invested</p>
                <p className="text-xl font-semibold mt-1">$45,678.90</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Current Value</p>
                <p className="text-xl font-semibold mt-1">$52,345.67</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Total Profit</p>
                <p className="text-xl font-semibold text-green-500 mt-1">+$6,666.77</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">ROI</p>
                <p className="text-xl font-semibold text-green-500 mt-1">+14.59%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}