import type { Metadata, Viewport } from "next";
import { Manrope, Michroma, Orbitron, Space_Grotesk } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteLook } from "@/components/site-look";
import { ThemeProvider } from "@/components/theme-provider";
import { OfflineIndicator } from "@/components/pwa/offline-indicator";
import { RegisterServiceWorker } from "@/components/pwa/register-sw";
import { getDictionary } from "@/i18n/get-dictionary";
import { LocaleProvider } from "@/i18n/locale-context";
import { getLocale } from "@/lib/get-locale";
import { getCcaSession } from "@/lib/cca/session";
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

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Ridgetechone — Teaching Aid",
    template: "%s | Ridgetechone",
  },
  description:
    "Instructor teaching aid — classroom slides, practice quizzes, and continuing competency assessment records. Not certification.",
  icons: {
    icon: [{ url: "/images/brand/ridgetechone-mark.png", type: "image/png" }],
    apple: [{ url: "/apple-icon", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [{ color: "#e4e9ef" }],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);
  const session = await getCcaSession();
  const instructor = session?.role === "instructor" ? session : null;
  const authState = {
    isAuthed: Boolean(session),
    canViewReports: false,
    isInstructor: Boolean(instructor),
    instructorName: instructor?.displayName,
    mustChangePassword: instructor?.mustChangePassword,
  };

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${orbitron.variable} ${michroma.variable} ${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head />
      <body
        data-site="saas"
        className="flex min-h-full flex-col overflow-x-hidden pb-[env(safe-area-inset-bottom)] font-sans"
      >
        <ThemeProvider>
          <LocaleProvider locale={locale} dictionary={dictionary}>
            <SiteLook />
            <SiteHeader authState={authState} />
            <main className="flex min-h-0 min-w-0 flex-1 flex-col">{children}</main>
            <SiteFooter />
            <OfflineIndicator />
            <RegisterServiceWorker />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
