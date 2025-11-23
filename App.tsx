import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GameCard from './components/GameCard';
import AIGameSommelier from './components/AIGameSommelier';
import StatsChart from './components/StatsChart';
import { MOCK_GAMES, UPCOMING_EVENTS, STORE_INFO } from './constants';
import { ArrowRight, Star, Coffee, Calendar, MapPin, CheckCircle2, Clock } from 'lucide-react';
import { Game } from './types';

// Home Page Component
const Home = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="/images/hero-landing.png"
            alt="Famille et amis jouant dans le café jeux Guyajeux Agde"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Jouer, Partager, <span className="text-brand-orange">S'amuser</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Guyajeux Agde n'est pas qu'une boutique. C'est un lieu de vie, un bar à jeux avec plus de {STORE_INFO.stats.gamesInBar} titres à découvrir autour d'un verre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/boutique" className="bg-brand-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all text-center">
                Découvrir la boutique
              </Link>
              <Link to="/bar" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all text-center">
                Réserver une table
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Sommelier Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AIGameSommelier />
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-orange">
              <Star size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-dark">Expertise Passionnée</h3>
            <p className="text-gray-600">Notre équipe de passionnés vous conseille parmi plus de 900 références pour trouver LE jeu qu'il vous faut.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600">
              <Coffee size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-dark">Bar à Jeux Convivial</h3>
            <p className="text-gray-600">Profitez de notre espace café ludique. Une boisson, des amis, et des centaines de jeux en accès libre.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
              <Calendar size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-dark">Événements Réguliers</h3>
            <p className="text-gray-600">Soirées loups-garous, tournois de cartes, après-midis famille... Il se passe toujours quelque chose !</p>
          </div>
        </div>
      </section>

      {/* Popular Games Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-display font-bold text-brand-dark mb-2">Les Incontournables</h2>
            <p className="text-gray-600">Nos coups de cœur du moment</p>
          </div>
          <Link to="/boutique" className="hidden md:flex items-center gap-2 text-brand-orange font-bold hover:underline">
            Tout voir <ArrowRight size={20} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_GAMES.slice(0, 4).map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
         <div className="mt-8 text-center md:hidden">
            <Link to="/boutique" className="inline-flex items-center gap-2 text-brand-orange font-bold">
              Voir tous les jeux <ArrowRight size={20} />
            </Link>
         </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div>
                <h2 className="text-3xl font-display font-bold text-brand-dark mb-6">Une collection pour tous les goûts</h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Que vous soyez un stratège aguerri ou que vous cherchiez juste à rire entre amis, notre sélection couvre tout le spectre ludique.
                </p>
                <ul className="space-y-4">
                  {['Jeux d\'ambiance rapides', 'Stratégie experte', 'Jeux enfants dès 3 ans', 'Escape games'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-green-500" size={20} />
                      <span className="font-medium text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
             </div>
             <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-center font-bold text-gray-500 mb-4 uppercase text-xs tracking-wider">Répartition du catalogue</h3>
                <StatsChart />
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

// Boutique Page
const Boutique = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-display font-bold text-brand-dark mb-4">La Boutique</h1>
      <p className="text-gray-600 mb-12 max-w-2xl">Parcourez notre sélection de plus de 900 jeux. Filtrez par catégorie pour trouver votre prochaine pépite.</p>
      
      {/* Category Pills (Mock) */}
      <div className="flex flex-wrap gap-3 mb-10">
        <button className="bg-brand-orange text-white px-5 py-2 rounded-full font-medium shadow-md">Tous</button>
        {['Familial', 'Expert', 'Ambiance', 'Enfants', 'Duo'].map(cat => (
          <button key={cat} className="bg-white text-gray-600 px-5 py-2 rounded-full font-medium border border-gray-200 hover:border-brand-orange hover:text-brand-orange transition-colors">
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {MOCK_GAMES.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

// Events Page
const Events = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-display font-bold text-brand-dark mb-4">Agenda Ludique</h1>
      <p className="text-gray-600 mb-12">Rejoignez la communauté Guyajeux Agde lors de nos prochains événements.</p>

      <div className="space-y-6">
        {UPCOMING_EVENTS.map(event => (
          <div key={event.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row gap-6 hover:border-l-4 hover:border-l-brand-orange transition-all">
            <div className="bg-orange-50 text-brand-orange rounded-lg p-4 flex flex-col items-center justify-center min-w-[100px] text-center">
              <span className="font-bold text-xl">{event.date.split(' ')[1]}</span>
              <span className="text-sm uppercase tracking-wide">{event.date.split(' ')[2]}</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                  event.type === 'Tournoi' ? 'bg-blue-100 text-blue-700' :
                  event.type === 'Soirée' ? 'bg-purple-100 text-purple-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {event.type}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1"><Clock size={16} /> {event.time}</span>
                <span className="flex items-center gap-1"><MapPin size={16} /> Guyajeux Agde</span>
              </div>
            </div>
            <div className="flex items-center">
              <button className="w-full md:w-auto px-6 py-2 border border-brand-dark text-brand-dark rounded-lg hover:bg-brand-dark hover:text-white transition-colors font-medium">
                S'inscrire
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Bar/Contact Page
const BarAndContact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl font-display font-bold text-brand-dark mb-6">Le Bar à Jeux</h1>
          <div className="prose text-gray-600 mb-8">
            <p className="mb-4">
              Notre espace café ludique est l'endroit idéal pour tester des jeux avant d'acheter, ou simplement passer un bon moment.
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li><strong>Accès :</strong> 5€ par personne (illimité)</li>
              <li><strong>Gratuité :</strong> Si vous achetez un jeu à la sortie !</li>
              <li><strong>Collection :</strong> +350 jeux en accès libre</li>
              <li><strong>Boissons :</strong> Café, thé, jus artisanaux, bières locales, snacks...</li>
            </ul>
          </div>
          <img
            src="/images/bar-le-jeux.png"
            alt="Le Bar à Jeux chez Guyajeux Agde"
            className="rounded-2xl shadow-lg w-full object-cover h-64"
          />
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-brand-dark">Nous Contacter</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
              <input type="text" className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-brand-orange focus:border-brand-orange p-3 border" placeholder="Votre nom" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-brand-orange focus:border-brand-orange p-3 border" placeholder="votre@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea rows={4} className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-brand-orange focus:border-brand-orange p-3 border" placeholder="Une question ? Une réservation ?"></textarea>
            </div>
            <button type="button" className="w-full bg-brand-orange text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-colors">
              Envoyer
            </button>
          </form>
          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <p className="font-bold text-gray-800 mb-1">{STORE_INFO.phone}</p>
            <p className="text-gray-500">{STORE_INFO.address}</p>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-xl font-bold text-brand-dark">Nous trouver</h3>
          <p className="text-gray-600 text-sm">15 rue Jean Roger, 34300 Agde</p>
        </div>
        <div className="aspect-[16/9] w-full">
          <iframe
            title="Carte Guyajeux Agde"
            src="https://www.google.com/maps?q=15+Rue+Jean+Roger+34300+Agde&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/boutique" element={<Boutique />} />
            <Route path="/evenements" element={<Events />} />
            <Route path="/bar" element={<BarAndContact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
