"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { questions } from "@/lib/questions";
import { Player, getPlayers, addPlayer, removePlayer, resetPlayers, togglePlayerActive } from "@/lib/players";
import { ArrowBigRightDash, Trash2, UserPlus, RefreshCw } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { saveGameState, loadGameState, resetGameState } from "@/lib/game-state";
import { SpinningWheel } from "./spinning-wheel";

export function Game() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [newPlayerName, setNewPlayerName] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [usedQuestions, setUsedQuestions] = useState<number[]>([]);
  const [answeredPlayers, setAnsweredPlayers] = useState<string[]>([]);

  // Load initial state
  useEffect(() => {
    const loadState = () => {
      const savedPlayers = getPlayers();
      const savedState = loadGameState();

      setPlayers(savedPlayers);
      setUsedQuestions(savedState.usedQuestions);
      setAnsweredPlayers(savedState.answeredPlayers);

      // Only set current player and question if they exist in the saved state
      if (savedState.currentPlayer && savedState.currentQuestion) {
        // Find the current player in the saved players list to ensure we have the latest data
        const currentPlayerFromList = savedPlayers.find((p) => p.id === savedState.currentPlayer?.id);
        if (currentPlayerFromList) {
          setCurrentPlayer(currentPlayerFromList);
          setCurrentQuestion(savedState.currentQuestion);
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
      answeredPlayers,
      currentPlayer,
      currentQuestion,
    };
    saveGameState(state);
  }, [usedQuestions, answeredPlayers, currentPlayer, currentQuestion]);

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
        setCurrentQuestion(randomQuestion.text);
      }

      spinCount++;
      if (spinCount >= maxSpins) {
        clearInterval(spinInterval);
        setIsSpinning(false);

        // For final selection, choose only from unused options
        const availablePlayers = players.filter((p) => p.active && !answeredPlayers.includes(p.id));
        const availableQuestions = questions.filter((q) => !usedQuestions.includes(q.id));

        // Reset if all have been used
        if (availablePlayers.length === 0) {
          setAnsweredPlayers([]);
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
            setCurrentQuestion(finalQuestion.text);
            setAnsweredPlayers((prev) => [...prev, finalPlayerId!]);
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
      setCurrentQuestion(newQuestion.text);
      setUsedQuestions((prev) => [...prev, newQuestion.id]);
    }
  };

  const handleResetQuestions = () => {
    setUsedQuestions([]);
    setCurrentQuestion(null);
    setCurrentPlayer(null);
    setAnsweredPlayers([]);
  };

  const handleReset = () => {
    setPlayers([]);
    setUsedQuestions([]);
    setAnsweredPlayers([]);
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
          currentQuestion={currentQuestion}
          onWheelClick={() => {
            if (!isSpinning && players.length > 0) {
              startSpinning();
            }
          }}
        />
        {currentPlayer && currentQuestion ? (
          <div className="space-y-4">
            <div className="space-x-4">
              <Button onClick={handleNextQuestion} variant="outline">
                <ArrowBigRightDash className="h-4 w-4" />
                Skip Question
                <ArrowBigRightDash className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-sm text-muted-foreground mt-4">Click the wheel to start the game</div>
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
            <Button type="submit" className="sm:px-4">
              <UserPlus className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Add Player</span>
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
              <Button variant="destructive" size="sm" onClick={() => handleRemovePlayer(player.id)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      {players.length > 0 && (
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="outline" onClick={handleResetQuestions} className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Reset Progress
          </Button>
          <Button variant="destructive" onClick={handleReset} className="gap-2">
            <Trash2 className="h-4 w-4" />
            Reset Game
          </Button>
        </div>
      )}
    </>
  );
}
