import { LanguageSwitcher } from "@/components/language-switcher";
import { PageShell } from "@/components/page-shell";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-full">
      <PageShell className="absolute inset-x-0 top-0 z-10 flex justify-end py-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
        <LanguageSwitcher />
      </PageShell>
      {children}
    </div>
  );
}
