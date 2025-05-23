export interface Player {
  id: string;
  name: string;
  active: boolean;
}

const STORAGE_KEY = "truth-game-players";

export const getPlayers = (): Player[] => {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const addPlayer = (name: string): Player[] => {
  const players = getPlayers();
  const newPlayer: Player = {
    id: crypto.randomUUID(),
    name,
    active: true,
  };
  const updatedPlayers = [...players, newPlayer];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPlayers));
  return updatedPlayers;
};

export const removePlayer = (id: string): Player[] => {
  const players = getPlayers();
  const updatedPlayers = players.filter((player) => player.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPlayers));
  return updatedPlayers;
};

export const togglePlayerActive = (id: string): Player[] => {
  const players = getPlayers();
  const updatedPlayers = players.map((player) => (player.id === id ? { ...player, active: !player.active } : player));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPlayers));
  return updatedPlayers;
};

export const resetPlayers = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};
