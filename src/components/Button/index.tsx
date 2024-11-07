import React from "react";
import { cn } from "../../utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const buttonStyles = cva(
  [
    "w-full",
    "rounded-md",
    "font-medium",
    "focus:outline-none",

    "disabled:pointer-events-none",
    "disabled:opacity-50",

    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-primary-900",
    "focus-visible:ring-offset-2",
  ],
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2",
        ghost: "transition-colors duration-300",
      },
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
        xl: "px-6 py-3 text-xl",
      },
      colorscheme: {
        primary: "text-white",
        secondary: "text-white",
        destructive: "text-white",
        success: "text-white",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorscheme: "primary",
        className: ["bg-primary-900", "hover:bg-primary-900/80"],
      },
      {
        variant: "solid",
        colorscheme: "secondary",
        className: ["bg-secondary-500", "hover:bg-secondary-500/80"],
      },
      {
        variant: "solid",
        colorscheme: "success",
        className: ["bg-success-500", "hover:bg-success-500/80"],
      },
      {
        variant: "solid",
        colorscheme: "destructive",
        className: ["bg-destructive-500", "hover:bg-destructive-500/80"],
      },

      {
        variant: "outline",
        colorscheme: "primary",
        className: [
          "bg-transparent",
          "text-primary-600",
          "border-primary-500",
          "hover:bg-primary-100",
        ],
      },
      {
        variant: "outline",
        colorscheme: "secondary",
        className: [
          "bg-transparent",
          "text-secondary-600",
          "border-secondary-500",
          "hover:bg-secondary-100",
        ],
      },
      {
        variant: "outline",
        colorscheme: "destructive",
        className: [
          "bg-transparent",
          "text-destructive-600",
          "border-destructive-500",
          "hover:bg-destructive-100",
        ],
      },
      {
        variant: "outline",
        colorscheme: "success",
        className: [
          "bg-transparent",
          "text-success-600",
          "border-success-500",
          "hover:bg-success-100",
        ],
      },

      {
        variant: "ghost",
        colorscheme: "primary",
        className: [
          "bg-transparent",
          "text-primary-900",
          "hover:bg-primary-200",
        ],
      },
      {
        variant: "ghost",
        colorscheme: "secondary",
        className: [
          "bg-transparent",
          "text-secondary-600",
          "hover:bg-secondary-100",
        ],
      },
      {
        variant: "ghost",
        colorscheme: "success",
        className: [
          "bg-transparent",
          "text-success-600",
          "hover:bg-success-200",
        ],
      },
      {
        variant: "ghost",
        colorscheme: "destructive",
        className: [
          "bg-transparent",
          "text-destructive-600",
          "hover:bg-destructive-100",
        ],
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorscheme: "primary",
    },
  }
);

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonStyles>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size, variant, colorscheme, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ variant, size, colorscheme, className }))}
        {...props}
      />
    );
  }
);
