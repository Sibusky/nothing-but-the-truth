"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowBigRightDash, Plus, X } from "lucide-react";
import { saveGameState, loadGameState, resetGameState } from "@/lib/game-state";
import { SpinningWheel } from "./spinning-wheel";
import { useDictionary } from "@/app/[lang]/dictionary-provider";
import { useParams } from "next/navigation";
import { Player, getPlayers, addPlayer, removePlayer, resetPlayers, togglePlayerActive } from "@/lib/players";
import { Checkbox } from "@/components/ui/checkbox";
import { questions, Question } from "@/lib/questions";
import { Locale } from "@/i18n.config";

export function Game() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [newPlayerName, setNewPlayerName] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [usedQuestions, setUsedQuestions] = useState<number[]>([]);
  const [answeredPlayers, setAnsweredPlayers] = useState<Set<string>>(new Set());

  const dictionary = useDictionary();
  const params = useParams();
  const lang = params?.lang as Locale;

  // Load initial state
  useEffect(() => {
    const loadState = () => {
      const savedPlayers = getPlayers();
      const savedState = loadGameState();

      if (savedState.usedQuestions.length > 0) {
        setUsedQuestions(savedState.usedQuestions);
      }
      if (savedState.answeredPlayers.length > 0) {
        setAnsweredPlayers(new Set(savedState.answeredPlayers));
      }
      setPlayers(savedPlayers);

      // Only set current player and question if they exist in the saved state
      if (savedState.currentPlayer) {
        const currentPlayerFromList = savedPlayers.find((p) => p.id === savedState.currentPlayer?.id);
        if (currentPlayerFromList) {
          setCurrentPlayer(currentPlayerFromList);
          if (savedState.currentQuestionId) {
            const question = questions.find((q) => q.id === savedState.currentQuestionId);
            if (question) {
              setCurrentQuestion(question);
            }
          }
        }
      }
    };

    loadState();

    // Add event listener for storage changes
    const handleStorageChange = () => {
      loadState();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Save state whenever it changes
  useEffect(() => {
    const state = {
      usedQuestions,
      answeredPlayers: Array.from(answeredPlayers),
      currentPlayer,
      currentQuestion: currentQuestion ? currentQuestion.translations[lang] : null,
      currentQuestionId: currentQuestion?.id || null,
    };
    saveGameState(state);
  }, [usedQuestions, answeredPlayers, currentPlayer, currentQuestion, lang]);

  const handleAddPlayer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (newPlayerName.trim()) {
      // Check if player with this name already exists
      if (players.some((player) => player.name.toLowerCase() === newPlayerName.trim().toLowerCase())) {
        setErrorMessage("Player with this name already exists");
        return;
      }

      const updatedPlayers = addPlayer(newPlayerName.trim());
      setPlayers(updatedPlayers);
      setNewPlayerName("");
    }
  };

  const handleRemovePlayer = (id: string) => {
    setPlayers(removePlayer(id));
  };

  const startSpinning = () => {
    setIsSpinning(true);
    let spinCount = 0;
    const maxSpins = 20;
    let finalQuestionId: number | null = null;
    let finalPlayerId: string | null = null;

    const spinInterval = setInterval(() => {
      // During spinning, show random selection from active players and questions
      const activePlayers = players.filter((p) => p.active);
      const randomPlayer = activePlayers[Math.floor(Math.random() * activePlayers.length)];
      const randomQuestion = questions[Math.floor(Math.random() * questions.length)];

      if (randomPlayer && randomQuestion) {
        setCurrentPlayer(randomPlayer);
        setCurrentQuestion(randomQuestion);
      }

      spinCount++;
      if (spinCount >= maxSpins) {
        clearInterval(spinInterval);
        setIsSpinning(false);

        // For final selection, choose only from unused options
        const availablePlayers = players.filter((p) => p.active && !answeredPlayers.has(p.id));
        const availableQuestions = questions.filter((q) => !usedQuestions.includes(q.id));

        // Reset if all have been used
        if (availablePlayers.length === 0) {
          setAnsweredPlayers(new Set());
          const activePlayers = players.filter((p) => p.active);
          finalPlayerId = activePlayers[Math.floor(Math.random() * activePlayers.length)].id;
        } else {
          finalPlayerId = availablePlayers[Math.floor(Math.random() * availablePlayers.length)].id;
        }

        if (availableQuestions.length === 0) {
          setUsedQuestions([]);
          finalQuestionId = questions[Math.floor(Math.random() * questions.length)].id;
        } else {
          finalQuestionId = availableQuestions[Math.floor(Math.random() * availableQuestions.length)].id;
        }

        // Set final selection
        if (finalPlayerId && finalQuestionId) {
          const finalPlayer = players.find((p) => p.id === finalPlayerId);
          const finalQuestion = questions.find((q) => q.id === finalQuestionId);
          if (finalPlayer && finalQuestion) {
            setCurrentPlayer(finalPlayer);
            setCurrentQuestion(finalQuestion);
            setAnsweredPlayers(new Set([finalPlayerId!]));
            setUsedQuestions((prev) => [...prev, finalQuestionId!]);
          }
        }
      }
    }, 100);
  };

  const handleNextQuestion = () => {
    const availableQuestions = questions.filter((q) => !usedQuestions.includes(q.id));
    let newQuestion;

    if (availableQuestions.length === 0) {
      setUsedQuestions([]);
      newQuestion = questions[Math.floor(Math.random() * questions.length)];
    } else {
      newQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    }

    if (newQuestion) {
      setCurrentQuestion(newQuestion);
      setUsedQuestions((prev) => [...prev, newQuestion.id]);
    }
  };

  const handleResetQuestions = () => {
    setUsedQuestions([]);
    setCurrentQuestion(null);
    setCurrentPlayer(null);
    setAnsweredPlayers(new Set());
  };

  const handleReset = () => {
    setPlayers([]);
    setUsedQuestions([]);
    setAnsweredPlayers(new Set());
    setCurrentPlayer(null);
    setCurrentQuestion(null);
    resetPlayers();
    resetGameState();
  };

  return (
    <>
      <div className="text-center flex flex-col items-center mb-10">
        <SpinningWheel
          isSpinning={isSpinning}
          currentPlayer={currentPlayer?.name || null}
          currentQuestion={currentQuestion ? currentQuestion.translations[lang] : null}
          onWheelClick={() => {
            if (!isSpinning && players.length > 0) {
              startSpinning();
            }
          }}
        />
        {currentPlayer && currentQuestion ? (
          <div className="space-y-4">
            <div className="space-x-4">
              <Button onClick={handleNextQuestion} variant="outline" aria-label={dictionary.game.skipQuestion}>
                <ArrowBigRightDash className="h-4 w-4" />
                {dictionary.game.skipQuestion}
                <ArrowBigRightDash className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-sm text-muted-foreground mt-4">
            {players.length > 0 ? dictionary.game.clickToStart : dictionary.game.clickToStart}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-5">
        <form onSubmit={handleAddPlayer} className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <input
              type="text"
              maxLength={15}
              value={newPlayerName}
              onChange={(e) => {
                setNewPlayerName(e.target.value);
                setErrorMessage("");
              }}
              placeholder="Enter player name"
              className="flex-1 p-2 border rounded"
            />
            <Button type="submit" className="sm:px-4" aria-label={dictionary.game.addPlayer}>
              <Plus className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">{dictionary.game.addPlayer}</span>
            </Button>
          </div>
          {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
        </form>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {players.map((player) => (
            <div key={player.id} className="flex items-center justify-between p-2 bg-muted gap-2 rounded">
              <div className="flex items-center gap-2">
                <Checkbox
                  id={`player-${player.id}`}
                  checked={player.active}
                  onCheckedChange={() => setPlayers(togglePlayerActive(player.id))}
                />
                <label
                  htmlFor={`player-${player.id}`}
                  className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer text-foreground ${
                    !player.active ? "opacity-50" : ""
                  }`}
                >
                  {player.name}
                </label>
              </div>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleRemovePlayer(player.id)}
                aria-label={dictionary.game.removePlayer}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      {players.length > 0 && (
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button
            variant="outline"
            onClick={handleResetQuestions}
            className="gap-2"
            aria-label={dictionary.game.resetProgress}
          >
            {dictionary.game.resetProgress}
          </Button>
          <Button variant="destructive" onClick={handleReset} className="gap-2" aria-label={dictionary.game.resetGame}>
            {dictionary.game.resetGame}
          </Button>
        </div>
      )}
    </>
  );
}
