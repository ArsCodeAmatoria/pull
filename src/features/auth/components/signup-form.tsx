"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { signupCompanyAction } from "@/lib/auth/actions";
import { signupSchema, type SignupInput } from "@/lib/validations";

const fieldClass =
  "w-full min-h-[52px] bg-foreground/5 px-4 py-3 text-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring";
const labelClass = "text-sm font-semibold uppercase tracking-wide text-muted-foreground";

export function SignupForm() {
  const [formError, setFormError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      companyName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = handleSubmit((values) => {
    setFormError(null);
    startTransition(async () => {
      const result = await signupCompanyAction(values);
      if (result?.error) {
        setFormError(result.error);
      }
    });
  });

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="space-y-2">
        <label htmlFor="companyName" className={labelClass}>
          Company or your name
        </label>
        <input id="companyName" className={fieldClass} {...register("companyName")} />
        {errors.companyName ? (
          <p className="text-sm text-destructive">{errors.companyName.message}</p>
        ) : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="firstName" className={labelClass}>
            First name
          </label>
          <input id="firstName" className={fieldClass} {...register("firstName")} />
          {errors.firstName ? (
            <p className="text-sm text-destructive">{errors.firstName.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className={labelClass}>
            Last name
          </label>
          <input id="lastName" className={fieldClass} {...register("lastName")} />
          {errors.lastName ? (
            <p className="text-sm text-destructive">{errors.lastName.message}</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input id="email" type="email" autoComplete="email" className={fieldClass} {...register("email")} />
        {errors.email ? (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className={labelClass}>
          Password
        </label>
        <input
          id="password"
          type="password"
          autoComplete="new-password"
          className={fieldClass}
          {...register("password")}
        />
        {errors.password ? (
          <p className="text-sm text-destructive">{errors.password.message}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label htmlFor="confirmPassword" className={labelClass}>
          Confirm password
        </label>
        <input
          id="confirmPassword"
          type="password"
          autoComplete="new-password"
          className={fieldClass}
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

      <Button type="submit" className="w-full" disabled={pending}>
        {pending ? "Creating account…" : "Create account"}
      </Button>

      <p className="text-center text-base text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-foreground underline underline-offset-4">
          Sign in
        </Link>
      </p>
    </form>
  );
}
