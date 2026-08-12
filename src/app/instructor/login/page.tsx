import type { Metadata } from "next";
import Link from "next/link";
import { LockViewport } from "@/components/lock-viewport";
import { BrandLogo } from "@/components/brand-logo";
import { LanguageSwitcher } from "@/components/language-switcher";
import { instructorLoginAction } from "@/lib/cca/actions";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocale } from "@/lib/get-locale";
import "./login-cyber.css";

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary(await getLocale());
  return { title: dict.auth.signInTitle };
}

export default async function InstructorLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  const sp = await searchParams;
  const next = sp.next?.startsWith("/") && !sp.next.startsWith("//") ? sp.next : "";
  const dict = getDictionary(await getLocale());

  return (
    <>
      <LockViewport />
      <div className="login-cyber">
        <div className="login-cyber__chrome">
          <span>{dict.auth.secureAccess}</span>
          <LanguageSwitcher className="login-cyber__chrome-btn" />
        </div>
        <div className="login-cyber__stage">
          <div className="login-cyber__mark">
            <BrandLogo
              priority
              className="h-[min(34vmin,13.5rem)] w-auto max-w-[92%] object-center sm:h-60"
            />
          </div>
          <div className="login-cyber__panel">
            <span className="login-cyber__sheen" aria-hidden />
            {sp.error ? <p className="login-cyber__error">{dict.auth.accessDenied}</p> : null}
            <form action={instructorLoginAction}>
              {next ? <input type="hidden" name="next" value={next} /> : null}
              <label>
                <span>{dict.auth.identifier}</span>
                <input name="username" required autoComplete="username" />
              </label>
              <label>
                <span>{dict.auth.password}</span>
                <input name="password" type="password" required autoComplete="current-password" />
              </label>
              <button type="submit" className="login-cyber__submit">
                {dict.auth.authorize}
              </button>
            </form>
            <p className="login-cyber__note">{dict.auth.namedAccountsNote}</p>
            <Link href="/join" className="login-cyber__join">
              {dict.teaching.joinTitle}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
