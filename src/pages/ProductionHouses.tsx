import React from 'react';
import { Film, Users, DollarSign, Star } from 'lucide-react';

const productionHouses = [
  {
    name: "Warner Bros. Pictures",
    totalMovies: 48,
    marketCap: "$89.5B",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=200",
    upcoming: 5,
    description: "Leading entertainment company with a rich history in filmmaking.",
  },
  {
    name: "Universal Studios",
    totalMovies: 52,
    marketCap: "$75.2B",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=200",
    upcoming: 4,
    description: "One of the oldest film studios in the world.",
  },
];

export default function ProductionHouses() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <h1 className="text-2xl font-bold">Production Houses</h1>
        <button className="btn btn-primary w-full sm:w-auto">Add to Watchlist</button>
      </div>

      <div className="grid gap-6">
        {productionHouses.map((studio, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <img
                src={studio.image}
                alt={studio.name}
                className="w-full sm:w-24 h-48 sm:h-24 rounded-xl object-cover"
              />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                  <div>
                    <h2 className="text-xl font-semibold">{studio.name}</h2>
                    <p className="text-gray-600 mt-1">{studio.description}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-medium">{studio.rating}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <Film className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="text-sm text-gray-500">Total Movies</p>
                      <p className="font-medium">{studio.totalMovies}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="text-sm text-gray-500">Market Cap</p>
                      <p className="font-medium">{studio.marketCap}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-500" />
                    <div>
                      <p className="text-sm text-gray-500">Upcoming</p>
                      <p className="font-medium">{studio.upcoming} Movies</p>
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