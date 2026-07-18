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
import { getCurrentProfile } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
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
    default: "pull — Tower Crane Rigger",
    template: "%s | pull",
  },
  description:
    "Open BC tower crane rigger education — lessons, practice tests, and certification by a Qualified Certifier.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [{ color: "#0b1424" }],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);
  const profile = await getCurrentProfile().catch(() => null);
  const authState = {
    isAuthed: Boolean(profile),
    canViewReports: profile ? hasPermission(profile.role, "reports") : false,
  };

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`dark ${orbitron.variable} ${michroma.variable} h-full antialiased`}
    >
      <head />
      <body className="flex min-h-full flex-col pb-[env(safe-area-inset-bottom)] font-sans">
        <ThemeProvider>
          <LocaleProvider locale={locale} dictionary={dictionary}>
            <SiteHeader authState={authState} />
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
