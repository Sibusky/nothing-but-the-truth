import Link from "next/link";
import { ThemeSwitcher } from "@/components/shared/theme-switcher";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";
import { LanguageSwitcher } from "./language-switcher";

export default async function Footer({ params: { lang } }: { params: { lang: string } }) {
  const dictionary = await getDictionary(lang as Locale);

  return (
    <footer className="border-t bg-background">
      <div className="w-full max-w-4xl flex h-14 items-center justify-between mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center gap-4">
          <Link href={`/${lang}`} className="text-sm text-muted-foreground hover:text-foreground">
            {dictionary.pages.home}
          </Link>
          <Link href={`/${lang}/about`} className="text-sm text-muted-foreground hover:text-foreground">
            {dictionary.pages.about}
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher currentLang={lang} />
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
}
