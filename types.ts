export enum GameCategory {
  FAMILY = 'Familial',
  EXPERT = 'Expert',
  KIDS = 'Enfants',
  PARTY = 'Ambiance',
  STRATEGY = 'Stratégie'
}

export interface Game {
  id: string;
  title: string;
  category: GameCategory;
  price: number;
  players: string;
  age: string;
  duration: string;
  image: string;
  description: string;
  isHot?: boolean;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  type: 'Tournoi' | 'Soirée' | 'Découverte';
}

export interface AIRecord {
  name: string;
  description: string;
  reason: string;
}

export interface NavigationItem {
  name: string;
  path: string;
}