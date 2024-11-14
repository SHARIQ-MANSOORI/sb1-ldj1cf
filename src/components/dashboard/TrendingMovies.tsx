import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const trendingMovies = [
  {
    title: "Inception 2",
    studio: "Warner Bros",
    price: 156.78,
    change: 12.34,
    volume: "1.2M",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=200"
  },
  {
    title: "Avatar 3",
    studio: "20th Century",
    price: 234.56,
    change: -5.67,
    volume: "2.5M",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=200"
  },
  {
    title: "Dune Part 3",
    studio: "Legendary",
    price: 189.90,
    change: 8.45,
    volume: "1.8M",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=200"
  }
];

export default function TrendingMovies() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold">Trending Movies</h2>
      </div>
      <div className="divide-y">
        {trendingMovies.map((movie, index) => (
          <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-4">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-medium">{movie.title}</h3>
                <p className="text-sm text-gray-500">{movie.studio}</p>
              </div>
              <div className="text-right">
                <div className="font-medium">${movie.price}</div>
                <div className={`flex items-center gap-1 text-sm ${
                  movie.change >= 0 ? 'text-green-500' : 'text-red-500'
                }`}>
                  {movie.change >= 0 ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  {Math.abs(movie.change)}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}