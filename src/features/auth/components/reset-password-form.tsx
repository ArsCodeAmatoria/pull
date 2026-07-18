"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import {
  resetPasswordSchema,
  type ResetPasswordInput,
} from "@/lib/validations";

export function ResetPasswordForm() {
  const router = useRouter();
  const [formError, setFormError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordInput>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setFormError(null);

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.updateUser({
        password: values.password,
      });

      if (error) {
        setFormError(error.message);
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      setFormError(
        error instanceof Error ? error.message : "Unable to update password.",
      );
    }
  });

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          New password
        </label>
        <input
          id="password"
          type="password"
          autoComplete="new-password"
          className="w-full min-h-[52px] bg-foreground/5 px-4 py-3 text-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          {...register("password")}
        />
        {errors.password ? (
          <p className="text-sm text-destructive">{errors.password.message}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label htmlFor="confirmPassword" className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Confirm new password
        </label>
        <input
          id="confirmPassword"
          type="password"
          autoComplete="new-password"
          className="w-full min-h-[52px] bg-foreground/5 px-4 py-3 text-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword ? (
          <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>
        ) : null}
      </div>

      {formError ? (
        <p className="border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          {formError}
        </p>
      ) : null}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Updating…" : "Update password"}
      </Button>
    </form>
  );
}
