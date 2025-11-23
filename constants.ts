import { Game, GameCategory, Event } from './types';
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const STORE_INFO = {
  name: "Guyajeux Agde",
  address: "15 rue Jean Roger, 34300 Agde",
  phone: "04 67 00 00 00", // Placeholder format
  email: "julienguyajeuxagde@gmail.com",
  hours: "Mardi au Samedi, 9h - 19h",
  stats: {
    gamesInShop: 900,
    gamesInBar: 350,
  }
};

export const MOCK_GAMES: Game[] = [
  {
    id: '1',
    title: 'Azul',
    category: GameCategory.STRATEGY,
    price: 39.90,
    players: '2-4',
    age: '8+',
    duration: '30-45min',
    image: '/images/game-donjons.jpg',
    description: 'Un jeu de placement de tuiles magnifique et stratégique.',
    isHot: true
  },
  {
    id: '2',
    title: 'Dixit',
    category: GameCategory.FAMILY,
    price: 29.90,
    players: '3-6',
    age: '8+',
    duration: '30min',
    image: '/images/game-foret.jpg',
    description: 'Un jeu de déduction et d’imagination avec des cartes oniriques.',
    isHot: true
  },
  {
    id: '3',
    title: 'Ark Nova',
    category: GameCategory.EXPERT,
    price: 65.00,
    players: '1-4',
    age: '14+',
    duration: '90-150min',
    image: '/images/game-starwars.jpg',
    description: 'Créez et gérez le zoo moderne le plus attractif.',
  },
  {
    id: '4',
    title: 'Unlock!',
    category: GameCategory.PARTY,
    price: 35.00,
    players: '1-6',
    age: '10+',
    duration: '60min',
    image: '/images/game-magic.jpg',
    description: 'Un Escape Game inspiré dans votre salon.',
  },
  {
    id: '5',
    title: 'Le Monstre des Couleurs',
    category: GameCategory.KIDS,
    price: 25.00,
    players: '2-5',
    age: '3+',
    duration: '20min',
    image: '/images/game-tarkir.jpg',
    description: 'Aidez le monstre à trier ses émotions.',
  }
];

export const UPCOMING_EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'Soirée Loups-Garous',
    date: 'Vendredi 24 Nov',
    time: '20h00',
    description: 'Venez débusquer les loups-garous dans une ambiance tamisée !',
    type: 'Soirée'
  },
  {
    id: 'e2',
    title: 'Tournoi Lorcana',
    date: 'Samedi 25 Nov',
    time: '14h00',
    description: 'Affrontez les meilleurs Illumineurs de la région.',
    type: 'Tournoi'
  },
  {
    id: 'e3',
    title: 'Après-midi Famille',
    date: 'Mercredi 29 Nov',
    time: '14h30',
    description: 'Découverte des nouveaux jeux Haba et Djeco.',
    type: 'Découverte'
  }
];

export const CHART_DATA = [
  { name: 'Familial', value: 35 },
  { name: 'Expert', value: 15 },
  { name: 'Ambiance', value: 25 },
  { name: 'Enfants', value: 25 },
];
