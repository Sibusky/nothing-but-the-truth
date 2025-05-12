import { Game } from "@/components/pages/home/game";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <main className="min-h-full p-4 sm:p-6 md:p-8 max-w-4xl mx-auto overflow-hidden">
      <h1 className="text-4xl font-bold mb-8 text-center">{dictionary.home.title}</h1>
      <Game />
    </main>
  );
}
