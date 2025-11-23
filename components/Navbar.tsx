import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Boutique', path: '/boutique' },
    { name: 'Bar à Jeux', path: '/bar' },
    { name: 'Événements', path: '/evenements' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
              <img
                src="/images/logo.jpg"
                alt="Logo Guyajeux"
                className="h-12 w-12 rounded-lg shadow-sm border border-orange-100 group-hover:rotate-3 transition-transform duration-300 object-cover"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl text-brand-dark leading-none">Guyajeux</span>
                <span className="text-sm text-brand-orange font-semibold tracking-widest uppercase">Agde</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-brand-orange bg-orange-50'
                    : 'text-gray-600 hover:text-brand-orange hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-brand-dark text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              <ShoppingBag size={18} />
              <span>Panier (0)</span>
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-brand-orange bg-orange-50'
                    : 'text-gray-600 hover:text-brand-orange hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
             <button className="w-full mt-4 bg-brand-orange text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2">
              <ShoppingBag size={18} />
              <span>Voir mon panier</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
