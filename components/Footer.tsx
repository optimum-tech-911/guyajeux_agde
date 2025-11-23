import React from 'react';
import { STORE_INFO } from '../constants';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand & Description */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4 text-brand-orange">Guyajeux Agde</h3>
            <p className="text-gray-300 mb-4">
              Votre destination ludique au cœur d'Agde. Magasin spécialisé et café ludique pour découvrir, partager et s'amuser.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-orange transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Nous trouver</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="text-brand-orange mt-1 shrink-0" size={18} />
                <span>{STORE_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="text-brand-orange shrink-0" size={18} />
                <span>{STORE_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="text-brand-orange shrink-0" size={18} />
                <span className="break-all">{STORE_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Horaires</h4>
            <div className="flex items-start gap-3 text-gray-300 mb-2">
              <Clock className="text-brand-orange mt-1 shrink-0" size={18} />
              <div>
                <p className="font-semibold text-white">Boutique & Bar</p>
                <p>{STORE_INFO.hours}</p>
                <p className="text-sm text-gray-400 mt-2">Soirées jeux selon calendrier</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Guyajeux Agde. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;