"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { i18n } from "@/i18n.config";
import { usePathname } from "next/navigation";

export function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const pathname = usePathname();
  const currentPath = pathname.replace(`/${currentLang}`, "");

  return (
    <div className="flex items-center gap-2">
      {i18n.locales.map((locale) => (
        <Link key={locale} href={`/${locale}${currentPath}`}>
          <Button variant={locale === currentLang ? "default" : "ghost"} size="sm" className="h-8 px-2">
            {locale.toUpperCase()}
          </Button>
        </Link>
      ))}
    </div>
  );
}
