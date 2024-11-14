import React from 'react';
import PortfolioStats from '../components/dashboard/PortfolioStats';
import TrendingMovies from '../components/dashboard/TrendingMovies';

export default function Dashboard() {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      <PortfolioStats />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TrendingMovies />
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <p className="text-gray-500">Coming soon...</p>
        </div>
      </div>
    </>
  );
}