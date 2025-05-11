import Link from "next/link";
import { ThemeSwitcher } from "@/components/shared/theme-switcher";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="w-full max-w-4xl flex h-14 items-center justify-between mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
            About
          </Link>
        </div>
        <ThemeSwitcher />
      </div>
    </footer>
  );
}
