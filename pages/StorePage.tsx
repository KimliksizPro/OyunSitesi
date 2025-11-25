
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import GameCard from '../components/GameCard';
import { Game } from '../types';
import { Search, Filter } from 'lucide-react';

interface StorePageProps {
  games: Game[];
}

const StorePage: React.FC<StorePageProps> = ({ games }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const categories = ['Tümü', 'RPG', 'Aksiyon', 'Strateji', 'Simülasyon', 'Indie', 'Yarış', 'FPS'];

  const filteredGames = games.filter(game => {
    // Safety check for invalid game data to prevent crashes
    if (!game || !game.title) return false;

    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tümü' || game.category.includes(selectedCategory) || (selectedCategory === 'FPS' && game.tags.includes('FPS'));
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-900 text-white pb-20">
      <Navbar />
      
      <div className="pt-24 pb-8 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-screen-xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6">Mağaza</h1>
            
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                {/* Search */}
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                    <input 
                        type="text" 
                        placeholder="Oyun ara..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    />
                </div>

                {/* Categories */}
                <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all border ${
                                selectedCategory === cat 
                                ? 'bg-cyan-600 border-cyan-500 text-white shadow-lg shadow-cyan-500/20' 
                                : 'bg-slate-800 border-slate-700 text-gray-400 hover:bg-slate-700 hover:text-white'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map(game => (
                <GameCard key={game.id} game={game} variant="portrait" />
            ))}
        </div>
        
        {filteredGames.length === 0 && (
            <div className="text-center py-20 text-gray-500">
                Aradığınız kriterlere uygun oyun bulunamadı.
            </div>
        )}
      </div>
    </div>
  );
};

export default StorePage;
