import { Game } from "@/components/pages/home/game";

export default function Home() {
  return (
    <main className="min-h-full p-4 sm:p-6 md:p-8 max-w-4xl mx-auto overflow-hidden">
      <h1 className="text-4xl font-bold mb-8 text-center">Nothing But The Truth</h1>
      <Game />
    </main>
  );
}
