import React from 'react';
import { Star, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
  variant?: 'portrait' | 'landscape';
}

const GameCard: React.FC<GameCardProps> = ({ game, variant = 'landscape' }) => {
  const isPortrait = variant === 'portrait';
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/game/${game.id}`);
  };

  // Use posterImage if available and in portrait mode, otherwise fall back to standard image
  const displayImage = (isPortrait && game.posterImage) ? game.posterImage : game.image;

  return (
    <div className={`group relative rounded-xl overflow-hidden bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col ${isPortrait ? 'h-full' : ''}`}>
      <div onClick={handleNavigate} className={`relative overflow-hidden block cursor-pointer ${isPortrait ? 'h-[350px]' : 'h-48'}`}>
        <img 
          src={displayImage} 
          alt={game.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
        
        {/* Top badges */}
        <div className="absolute top-3 left-3">
          <span className="bg-black/60 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider border border-white/10">
            {game.category}
          </span>
        </div>

        {/* Hover Actions */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/60 backdrop-blur-[2px]">
          <div className="flex items-center gap-2">
             <div className="text-white font-bold flex flex-col items-center">
                <Eye className="w-8 h-8 mb-2 text-cyan-400" />
                <span>İncele</span>
             </div>
          </div>
        </div>
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <div onClick={handleNavigate} className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors truncate pr-2 hover:underline cursor-pointer">
            {game.title}
          </div>
          <div className="flex items-center bg-slate-950/50 px-1.5 py-0.5 rounded border border-slate-700">
            <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
            <span className="text-xs font-bold text-gray-300">{game.rating}</span>
          </div>
        </div>
        
        {!isPortrait && (
          <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
            {game.description}
          </p>
        )}

        <div className="mt-auto flex items-center justify-between pt-3 border-t border-slate-700/50">
            <div className="flex flex-wrap gap-1">
                {isPortrait && game.tags.slice(0,2).map(tag => (
                    <span key={tag} className="text-[10px] text-gray-500 border border-gray-700 rounded px-1">{tag}</span>
                ))}
            </div>
          <span className="text-lg font-bold text-white">{game.price}</span>
        </div>
      </div>
    </div>
  );
};

export default GameCard;