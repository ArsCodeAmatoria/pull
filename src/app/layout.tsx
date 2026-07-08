import type { Metadata, Viewport } from "next";
import { Michroma, Orbitron } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { OfflineIndicator } from "@/components/pwa/offline-indicator";
import { RegisterServiceWorker } from "@/components/pwa/register-sw";
import { getDictionary } from "@/i18n/get-dictionary";
import { LocaleProvider } from "@/i18n/locale-context";
import { getLocale } from "@/lib/get-locale";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "pull — Rigging Course",
    template: "%s | pull",
  },
  description:
    "Crane rigging and advanced rigging education — structured lessons, practice tests, and in-person certification.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1424" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${orbitron.variable} ${michroma.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('pull-theme');document.documentElement.classList.toggle('dark',t==='dark')}catch(e){}})()`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col pb-[env(safe-area-inset-bottom)] font-sans">
        <ThemeProvider>
          <LocaleProvider locale={locale} dictionary={dictionary}>
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
            <OfflineIndicator />
            <RegisterServiceWorker />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
