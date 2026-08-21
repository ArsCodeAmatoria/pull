import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Michroma, Orbitron, Oswald } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteLook } from "@/components/site-look";
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

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: {
    default: "Pull — 92 Competencies",
    template: "%s | Pull",
  },
  description:
    "Educational material on the 92 rigger competencies WorkSafeBC is putting forward. Always follow current WorkSafeBC regulations and standards, and manufacturers' instructions.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [{ color: "#ffffff" }],
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
      data-theme="light"
      className={`${orbitron.variable} ${michroma.variable} ${oswald.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("pull-theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",t);document.documentElement.style.colorScheme=t}catch(e){}})();`,
          }}
        />
      </head>
      <body
        data-site="saas"
        className="flex min-h-full flex-col overflow-x-hidden pb-[env(safe-area-inset-bottom)] font-sans"
      >
        <ThemeProvider>
          <LocaleProvider locale={locale} dictionary={dictionary}>
            <SiteLook />
            <a href="#content" className="skip">
              Skip to content
            </a>
            <SiteHeader />
            <main id="content" className="flex min-h-0 min-w-0 flex-1 flex-col">
              {children}
            </main>
            <SiteFooter />
            <OfflineIndicator />
            <RegisterServiceWorker />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
