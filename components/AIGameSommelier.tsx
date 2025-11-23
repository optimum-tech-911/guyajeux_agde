import React, { useState } from 'react';
import { Sparkles, Send, Loader2, Info } from 'lucide-react';
import { getGameRecommendations } from '../services/geminiService';
import { AIRecord } from '../types';

const AIGameSommelier: React.FC = () => {
  const [query, setQuery] = useState('');
  const [recommendations, setRecommendations] = useState<AIRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setRecommendations([]);

    try {
      const results = await getGameRecommendations(query);
      setRecommendations(results);
    } catch (err) {
      setError("Désolé, notre sommelier est en pause café. Réessayez plus tard !");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 to-brand-dark rounded-2xl p-8 text-white relative overflow-hidden shadow-2xl">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500 opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1 rounded-full text-brand-orange text-sm font-semibold mb-6 border border-white/10">
          <Sparkles size={16} />
          <span>Besoin d'un conseil ? Contactez-nous</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Contactez l'equipe Guyajeux
        </h2>
        <p className="text-gray-300 mb-8 text-lg">
          Decrivez vos envies (jeu recherche, evenement, reservation...) et notre equipe vous repond.
        </p>

        <form onSubmit={handleSearch} className="relative max-w-xl mx-auto mb-10">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ecrivez votre message (jeu recherche, reservation bar, evenement...)"
            className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-full py-4 pl-6 pr-14 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:bg-white/20 transition-all backdrop-blur-sm"
          />
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="absolute right-2 top-2 p-2 bg-brand-orange rounded-full text-white hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
          </button>
        </form>

        {error && (
          <div className="bg-red-500/20 border border-red-500/50 text-red-200 p-4 rounded-xl mb-6">
            {error}
          </div>
        )}

        {recommendations.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left animate-fade-in">
            {recommendations.map((rec, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-colors"
              >
                <h3 className="text-xl font-bold text-brand-orange mb-2">{rec.name}</h3>
                <p className="text-sm text-gray-300 italic mb-3">{rec.description}</p>
                <div className="flex items-start gap-2 text-sm text-white">
                  <Info size={16} className="mt-1 shrink-0 text-purple-400" />
                  <p>{rec.reason}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AIGameSommelier;