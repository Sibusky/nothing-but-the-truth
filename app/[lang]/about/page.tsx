import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";

export default async function About({ params: { lang } }: { params: { lang: string } }) {
  const dictionary = await getDictionary(lang as Locale);

  return (
    <main className="min-h-screen p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
      <div className="flex items-center mb-8">
        <Link href={`/${lang}`}>
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            {dictionary.about.backToGame}
          </Button>
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-8 text-center">{dictionary.about.title}</h1>

      <div className="space-y-6 text-lg">
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">{dictionary.about.howToPlay.title}</h2>
          <ol className="list-decimal list-inside space-y-2">
            {dictionary.about.howToPlay.steps.map((step: string, index: number) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">{dictionary.about.rules.title}</h2>
          <ul className="list-disc list-inside space-y-2">
            {dictionary.about.rules.items.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">{dictionary.about.controls.title}</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">{dictionary.about.controls.resetProgress.title}</h3>
              <p>{dictionary.about.controls.resetProgress.description}</p>
              <ul className="list-disc list-inside ml-4 mt-1">
                {dictionary.about.controls.resetProgress.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">{dictionary.about.controls.resetGame.title}</h3>
              <p>{dictionary.about.controls.resetGame.description}</p>
              <ul className="list-disc list-inside ml-4 mt-1">
                {dictionary.about.controls.resetGame.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">{dictionary.about.tips.title}</h2>
          <ul className="list-disc list-inside space-y-2">
            {dictionary.about.tips.items.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
