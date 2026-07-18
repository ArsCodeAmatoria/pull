"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { touchLastLoginAction } from "@/lib/auth/actions";
import { createClient } from "@/lib/supabase/client";
import { loginSchema, type LoginInput } from "@/lib/validations";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formError, setFormError] = useState<string | null>(() => {
    const error = searchParams.get("error");
    if (error === "inactive") {
      return "Your account is inactive. Contact your company administrator.";
    }
    if (error === "no_pull_access") {
      return "This account doesn't have Pull access yet. Contact your company administrator.";
    }
    if (error === "config") {
      return "Supabase is not configured. Add your project keys to .env.local.";
    }
    if (error === "auth_callback") {
      return "Authentication link is invalid or expired.";
    }
    return null;
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: true,
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setFormError(null);

    try {
      const supabase = createClient({ rememberMe: values.rememberMe });
      const { error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) {
        setFormError(error.message);
        return;
      }

      await touchLastLoginAction();
      const next = searchParams.get("next") || "/dashboard";
      router.push(next);
      router.refresh();
    } catch (error) {
      setFormError(
        error instanceof Error
          ? error.message
          : "Unable to sign in. Check Supabase configuration.",
      );
    }
  });

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          className="w-full min-h-[52px] bg-foreground/5 px-4 py-3 text-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
          {...register("email")}
        />
        {errors.email ? (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Password
          </label>
          <Link href="/forgot-password" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
            Forgot password?
          </Link>
        </div>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          className="w-full min-h-[52px] bg-foreground/5 px-4 py-3 text-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          {...register("password")}
        />
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
            Remember me for 30 days
          </label>
        )}
      />

      {formError ? (
        <p className="border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          {formError}
        </p>
      ) : null}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Signing in…" : "Sign in"}
      </Button>

      <p className="text-center text-base text-muted-foreground">
        New here?{" "}
        <Link href="/signup" className="font-semibold text-foreground underline underline-offset-4">
          Create an account
        </Link>
      </p>
    </form>
  );
}
