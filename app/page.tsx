"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { questions } from "@/lib/questions";
import { Player, getPlayers, addPlayer, removePlayer } from "@/lib/players";
import { SpinningWheel } from "@/components/spinning-wheel";
import { ArrowBigRightDash, Trash2 } from "lucide-react";

export default function Home() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [newPlayerName, setNewPlayerName] = useState<string>("");
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [usedQuestions, setUsedQuestions] = useState<number[]>([]);
  const [answeredPlayers, setAnsweredPlayers] = useState<string[]>([]);

  useEffect(() => {
    setPlayers(getPlayers());
  }, []);

  const handleAddPlayer = () => {
    if (newPlayerName.trim()) {
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
      // During spinning, show random selection from all players and questions
      const randomPlayer = players[Math.floor(Math.random() * players.length)];
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
        const availablePlayers = players.filter((p) => !answeredPlayers.includes(p.id));
        const availableQuestions = questions.filter((q) => !usedQuestions.includes(q.id));

        // Reset if all have been used
        if (availablePlayers.length === 0) {
          setAnsweredPlayers([]);
          finalPlayerId = players[Math.floor(Math.random() * players.length)].id;
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

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Truth Game</h1>

      {/* Player Management */}
      <div className="mb-8">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newPlayerName}
            onChange={(e) => setNewPlayerName(e.target.value)}
            placeholder="Enter player name"
            className="flex-1 p-2 border rounded"
          />
          <Button onClick={handleAddPlayer}>Add Player</Button>
        </div>

        <div className="text-center flex flex-col items-center mb-8">
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {players.map((player) => (
            <div key={player.id} className="flex items-center justify-between p-2 bg-gray-100 rounded">
              <span>{player.name}</span>
              <Button variant="destructive" size="sm" onClick={() => handleRemovePlayer(player.id)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
