import React from 'react';
import { Game } from '../types';
import { Users, Clock, Smile } from 'lucide-react';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={game.image} 
          alt={game.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        {game.isHot && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md animate-pulse">
            COUP DE CŒUR
          </div>
        )}
        <div className="absolute top-2 left-2 bg-brand-dark/80 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-md">
          {game.category}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{game.title}</h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{game.description}</p>
        
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4 bg-gray-50 p-2 rounded-lg">
          <div className="flex items-center gap-1" title="Joueurs">
            <Users size={14} className="text-brand-orange" />
            <span>{game.players}</span>
          </div>
          <div className="flex items-center gap-1" title="Age">
            <Smile size={14} className="text-brand-orange" />
            <span>{game.age}</span>
          </div>
          <div className="flex items-center gap-1" title="Durée">
            <Clock size={14} className="text-brand-orange" />
            <span>{game.duration}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-bold text-brand-orange">{game.price.toFixed(2)} €</span>
          <button className="bg-brand-dark text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-brand-orange transition-colors">
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;