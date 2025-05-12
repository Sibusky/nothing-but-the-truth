import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { i18n, Locale } from "@/i18n.config";
import { Providers } from "./providers";
import { getDictionary } from "@/lib/dictionary";
import Footer from "@/components/shared/footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    apple: "/ru/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <title>{dictionary.home.title}</title>
        <meta name="description" content={dictionary.home.description} />
        <meta name="application-name" content={dictionary.home.title} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={dictionary.home.title} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#4F46E5" />
        {/* <link rel="apple-h-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" /> */}
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Providers dictionary={dictionary}>
            <div className="relative flex min-h-screen flex-col">
              <div className="flex-1">{children}</div>
              <Footer params={params} />
            </div>
          </Providers>
        </ThemeProvider>
        <Script src="/sw-register.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
