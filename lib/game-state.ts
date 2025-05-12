import { Player } from "./players";

const STORAGE_KEY = "truth-game-state";

interface GameState {
  usedQuestions: number[];
  answeredPlayers: string[];
  currentPlayer: Player | null;
  currentQuestion: string | null;
  currentQuestionId: number | null;
}

export const saveGameState = (state: GameState): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

export const loadGameState = (): GameState => {
  if (typeof window === "undefined")
    return {
      usedQuestions: [],
      answeredPlayers: [],
      currentPlayer: null,
      currentQuestion: null,
      currentQuestionId: null,
    };
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored
    ? JSON.parse(stored)
    : {
        usedQuestions: [],
        answeredPlayers: [],
        currentPlayer: null,
        currentQuestion: null,
        currentQuestionId: null,
      };
};

export const resetGameState = (): void => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
};
