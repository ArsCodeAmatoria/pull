import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-none font-mono text-[0.7rem] font-medium uppercase tracking-[0.16em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 sm:w-auto",
  {
    variants: {
      variant: {
        default: "border border-foreground bg-foreground text-background hover:border-[var(--crown)] hover:bg-[var(--crown)] hover:text-foreground",
        secondary: "border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background",
        outline: "border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background",
        ghost: "border border-transparent text-foreground hover:bg-muted",
        link: "text-foreground underline-offset-4 hover:text-[var(--crown)] hover:underline",
      },
      size: {
        default: "min-h-[44px] px-5 py-2.5",
        sm: "min-h-[40px] px-4 py-2",
        lg: "min-h-[48px] px-[1.1rem] py-[0.85rem]",
        icon: "h-11 w-11",
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
