
import { ALL_GAMES } from '../data/games';
import { Game } from '../types';

const API_URL = 'https://api.npoint.io/6fa1f3c707fc42e61764';

export const GameDataService = {
  fetchGames: async (): Promise<Game[]> => {
    try {
      console.log('Fetching games from API...');
      const response = await fetch(API_URL);
      const data = await response.json();

      // Veri kontrolü: Eğer API boşsa veya dizi değilse, yerel verileri yükle (Seed)
      if (!data || (Array.isArray(data) && data.length === 0) || Object.keys(data).length === 0) {
        console.log('API is empty, seeding with local data...');
        await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(ALL_GAMES)
        });
        return ALL_GAMES;
      }

      let parsedGames: any[] = [];
      // Handle both array and object responses
      if (Array.isArray(data)) {
        parsedGames = data;
      } else if (typeof data === 'object') {
        parsedGames = Object.values(data);
      }

      // CRITICAL FIX: Filter out null/undefined or incomplete game objects
      // This prevents "game.title is undefined" errors in the UI
      const validGames = parsedGames.filter((g: any) => g && typeof g === 'object' && typeof g.title === 'string');

      if (validGames.length === 0) {
          console.warn("API returned no valid games, using local backup.");
          return ALL_GAMES;
      }

      return validGames as Game[];
    } catch (error) {
      console.error("Failed to fetch games from API, using local backup:", error);
      return ALL_GAMES;
    }
  }
};
