import React from 'react';
import { BarChart2, Calendar, DollarSign } from 'lucide-react';

const trendingData = [
  {
    title: "Inception 2",
    studio: "Warner Bros",
    releaseDate: "2024-12-25",
    price: 156.78,
    change: 12.34,
    volume: "1.2M",
    marketCap: "$2.3B",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=200"
  },
  {
    title: "Avatar 3",
    studio: "20th Century",
    releaseDate: "2025-06-15",
    price: 234.56,
    change: -5.67,
    volume: "2.5M",
    marketCap: "$4.1B",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=200"
  }
];

export default function TrendingPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-2">
        <h1 className="text-2xl font-bold">Trending Movies</h1>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <select className="btn btn-secondary w-full sm:w-auto">
            <option>Sort by Volume</option>
            <option>Sort by Price</option>
            <option>Sort by Change</option>
          </select>
          <button className="btn btn-primary w-full sm:w-auto">Trade Now</button>
        </div>
      </div>

      <div className="grid gap-4">
        {trendingData.map((movie, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full sm:w-32 h-48 sm:h-32 rounded-xl object-cover"
              />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
                  <div>
                    <h2 className="text-xl font-semibold">{movie.title}</h2>
                    <p className="text-gray-600">{movie.studio}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-2xl font-bold">${movie.price}</p>
                    <p className={movie.change >= 0 ? 'text-green-500' : 'text-red-500'}>
                      {movie.change}%
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Release Date</p>
                      <p className="font-medium">{movie.releaseDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart2 className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Volume</p>
                      <p className="font-medium">{movie.volume}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Market Cap</p>
                      <p className="font-medium">{movie.marketCap}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}