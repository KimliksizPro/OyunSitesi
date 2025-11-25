
export interface SystemRequirements {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Game {
  id: string;
  title: string;
  category: string;
  rating: number;
  image: string; // Yatay (Landscape) resim
  posterImage?: string; // Dikey (Portrait) resim
  gallery?: string[]; // Ekran görüntüleri
  description: string;
  longDescription?: string; // Detaylı açıklama
  price: string;
  tags: string[];
  releaseDate: string;
  developer?: string;
  publisher?: string;
  systemRequirements?: {
    minimum: SystemRequirements;
    recommended: SystemRequirements;
  };
  reviews?: Review[];
  downloadUrl?: string; // Oyunun indirme veya mağaza linki
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  library: string[]; // Satın alınan oyun ID'leri
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface Comment {
  id: string;
  userName: string;
  userAvatar: string;
  content: string;
  date: string;
}

export interface Post {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  title: string;
  content: string;
  likes: number;
  comments: Comment[]; // Changed from number to Comment array
  tags: string[];
  date: string;
}

export enum AIStatus {
  IDLE,
  THINKING,
  STREAMING,
  ERROR
}
