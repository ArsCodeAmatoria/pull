"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { useTranslations } from "@/i18n/locale-context";
import { touchLastLoginAction } from "@/lib/auth/actions";
import { createClient } from "@/lib/supabase/client";
import { loginSchema, type LoginInput } from "@/lib/validations";

const PLATFORM_ADMIN_ALIASES = new Set(["entopy", "entropy"]);
const PLATFORM_ADMIN_EMAIL = "entopy@arscodeamatoria.com";

function resolveLoginEmail(identifier: string): { email?: string; error?: string } {
  const trimmed = identifier.trim();
  if (!trimmed) return { error: "Enter your email." };
  if (!trimmed.includes("@")) {
    if (!PLATFORM_ADMIN_ALIASES.has(trimmed.toLowerCase())) {
      return { error: "Enter a valid email address." };
    }
    return { email: PLATFORM_ADMIN_EMAIL };
  }
  return { email: trimmed.toLowerCase() };
}

export function LoginForm() {
  const { t } = useTranslations();
  const searchParams = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);

  const queryError = useMemo(() => {
    const error = searchParams.get("error");
    if (error === "inactive") return t("auth.errorInactive");
    if (error === "no_pull_access") return t("auth.errorNoAccess");
    if (error === "config") {
      if (
        process.env.NEXT_PUBLIC_SUPABASE_URL &&
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      ) {
        return null;
      }
      return t("auth.errorConfig");
    }
    if (error === "auth_callback") return t("auth.errorCallback");
    return null;
  }, [searchParams, t]);

  const [formError, setFormError] = useState<string | null>(null);
  const displayError = formError ?? queryError;

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: "",
      password: "",
      rememberMe: true,
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setFormError(null);

    try {
      const resolved = resolveLoginEmail(values.identifier);
      if (resolved.error || !resolved.email) {
        setFormError(resolved.error ?? t("auth.errorGeneric"));
        return;
      }

      const supabase = createClient({ rememberMe: values.rememberMe });
      const { error } = await supabase.auth.signInWithPassword({
        email: resolved.email,
        password: values.password,
      });

      if (error) {
        setFormError(error.message);
        return;
      }

      try {
        await touchLastLoginAction();
      } catch {
        // Non-fatal — session is already established client-side.
      }

      // Hard navigate so the session cookies are always sent on the next
      // document request (soft router.push can race cookie writes).
      const next = searchParams.get("next") || "/dashboard";
      const safeNext =
        next.startsWith("/") && !next.startsWith("//") ? next : "/dashboard";
      window.location.assign(safeNext);
    } catch (error) {
      setFormError(
        error instanceof Error ? error.message : t("auth.errorGeneric"),
      );
    }
  });

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="space-y-2">
        <label
          htmlFor="identifier"
          className="text-sm font-semibold uppercase tracking-wide text-muted-foreground"
        >
          {t("auth.identifier")}
        </label>
        <input
          id="identifier"
          type="text"
          autoComplete="username"
          inputMode="email"
          placeholder={t("auth.identifierPlaceholder")}
          className="w-full min-h-[52px] bg-foreground/5 px-4 py-3 text-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
          {...register("identifier")}
        />
        {errors.identifier ? (
          <p className="text-sm text-destructive">{errors.identifier.message}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="text-sm font-semibold uppercase tracking-wide text-muted-foreground"
          >
            {t("auth.password")}
          </label>
          <Link
            href="/forgot-password"
            className="text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            {t("auth.forgotPassword")}
          </Link>
        </div>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            className="w-full min-h-[52px] bg-foreground/5 px-4 py-3 pr-14 text-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            {...register("password")}
          />
          <button
            type="button"
            onClick={() => setShowPassword((open) => !open)}
            className="absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground hover:text-foreground"
            aria-label={showPassword ? t("auth.hidePassword") : t("auth.showPassword")}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>
        {errors.password ? (
          <p className="text-sm text-destructive">{errors.password.message}</p>
        ) : null}
      </div>

      <Controller
        control={control}
        name="rememberMe"
        render={({ field }) => (
          <label className="flex items-center gap-3 text-base text-muted-foreground">
            <input
              type="checkbox"
              checked={field.value}
              onChange={(event) => field.onChange(event.target.checked)}
              className="h-5 w-5 accent-foreground"
            />
            {t("auth.rememberMe")}
          </label>
        )}
      />

      {displayError ? (
        <p className="border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          {displayError}
        </p>
      ) : null}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? t("auth.signingIn") : t("auth.signIn")}
      </Button>

      <p className="text-center text-base text-muted-foreground">
        {t("auth.newHere")}{" "}
        <Link
          href="/signup"
          className="font-semibold text-foreground underline underline-offset-4"
        >
          {t("auth.createAccount")}
        </Link>
      </p>
    </form>
  );
}
