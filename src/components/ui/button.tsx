import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex w-full items-center justify-center whitespace-nowrap font-display text-lg font-semibold uppercase tracking-wider transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:w-auto",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:opacity-90",
        secondary: "bg-foreground/10 text-foreground hover:opacity-80",
        outline: "bg-transparent text-foreground hover:opacity-80",
        ghost: "text-foreground hover:opacity-80",
        link: "text-foreground underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-[52px] px-6 py-3 lg:min-h-[56px] lg:px-8 lg:text-xl",
        sm: "min-h-[48px] px-4 py-2 text-base",
        lg: "min-h-[56px] px-8 py-4 text-xl lg:min-h-[60px] lg:text-2xl",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
