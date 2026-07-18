"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import {
  forgotPasswordSchema,
  type ForgotPasswordInput,
} from "@/lib/validations";

export function ForgotPasswordForm() {
  const [formError, setFormError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordInput>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = handleSubmit(async (values) => {
    setFormError(null);
    setSuccess(false);

    try {
      const supabase = createClient();
      const origin = window.location.origin;
      const { error } = await supabase.auth.resetPasswordForEmail(values.email, {
        redirectTo: `${origin}/callback?next=/reset-password`,
      });

      if (error) {
        setFormError(error.message);
        return;
      }

      setSuccess(true);
    } catch (error) {
      setFormError(
        error instanceof Error ? error.message : "Unable to send reset email.",
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
          className="w-full min-h-[52px] bg-foreground/5 px-4 py-3 text-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          {...register("email")}
        />
        {errors.email ? (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        ) : null}
      </div>

      {formError ? (
        <p className="border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          {formError}
        </p>
      ) : null}

      {success ? (
        <p className="border border-foreground/10 bg-foreground/5 px-4 py-3 text-sm text-muted-foreground">
          If an account exists for that email, a reset link has been sent.
        </p>
      ) : null}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send reset link"}
      </Button>

      <p className="text-center text-base text-muted-foreground">
        <Link href="/login" className="font-semibold text-foreground underline underline-offset-4">
          Back to sign in
        </Link>
      </p>
    </form>
  );
}
