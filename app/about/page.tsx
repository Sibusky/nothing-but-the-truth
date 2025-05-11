import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
      <div className="flex items-center mb-8">
        <Link href="/">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Game
          </Button>
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-8 text-center">About the Game</h1>

      <div className="space-y-6 text-lg">
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">How to Play</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Add players to the game by entering their names</li>
            <li>Click the wheel to start spinning</li>
            <li>When the wheel stops, the selected player must answer the question truthfully</li>
            <li>If a player doesn&apos;t want to answer, they can skip the question</li>
            <li>The game continues until all players have answered questions</li>
          </ol>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">Rules</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Players must answer questions honestly</li>
            <li>Each player can only be selected once until all players have had a turn</li>
            <li>Questions won&apos;t repeat until all questions have been used</li>
            <li>Players can skip questions they&apos;re uncomfortable with</li>
            <li>There are no winners or losers - it&apos;s all about getting to know each other better!</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">Game Controls</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Reset Progress</h3>
              <p>
                Resets the current game progress while keeping all players. This will:
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Clear the current player and question</li>
                  <li>Reset the list of answered players</li>
                  <li>Make all questions available again</li>
                </ul>
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Reset Game</h3>
              <p>
                Completely resets the game. This will:
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Remove all players</li>
                  <li>Clear all game progress</li>
                  <li>Reset all questions</li>
                </ul>
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Create a comfortable and safe environment for sharing</li>
            <li>Respect each other&apos;s boundaries and privacy</li>
            <li>Be supportive and non-judgmental of others&apos; answers</li>
            <li>Feel free to elaborate on your answers to make the game more engaging</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
