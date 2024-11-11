import React, { ComponentProps, forwardRef } from "react";
import styled, { css } from "styled-components";
import { Theme, GlobalStyle } from "../../layout";

const buttonVariants = {
  solid: css``,
  outline: css`
    border: 2px solid;
    background: transparent;
  `,
  ghost: css`
    background: transparent;
    transition: color 300ms;
  `,
};

const buttonSizes = {
  sm: css`
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
  `,
  md: css`
    padding: 0.5rem 1rem;
    font-size: 1rem;
  `,
  lg: css`
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
  `,
  xl: css`
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
  `,
};

const colorSchemes = {
  primary: Theme.colors.primary[900],
  secondary: Theme.colors.secondary[500],
  destructive: Theme.colors.destructive[500],
  success: Theme.colors.success[500],
};

const StyledButton = styled.button<ButtonProps>`
  width: 100%;
  border-radius: 0.375rem;
  font-weight: 500;
  outline: none;
  font-family: "Geist";
  font-weight: 500;
  border: 2px solid transparent;
  pointer-events: ${(props) => (props?.disabled ? "none" : "auto")};
  opacity: ${(props) => (props?.disabled ? 0.5 : 1)};

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => Theme.colors.primary[900]},
      0 0 0 4px ${(props) => Theme.colors.primary[900]};
  }

  ${(props) => buttonVariants[props?.variant || "solid"]}
  ${(props) => buttonSizes[props?.size || "md"]}

  ${(props) =>
    props.variant === "solid" &&
    css`
      background-color: ${colorSchemes[props.colorscheme || "primary"]};
      color: ${Theme.colors.white};
      &:hover {
        background-color: ${colorSchemes[props.colorscheme || "primary"]}CC;
      }
    `}

  ${(props) =>
    props.variant === "outline" &&
    css`
      color: ${colorSchemes[props.colorscheme || "primary"]};
      border-color: ${colorSchemes[props.colorscheme || "primary"]};
      &:hover {
        background-color: ${colorSchemes[props.colorscheme || "primary"]}10;
      }
    `}

  ${(props) =>
    props.variant === "ghost" &&
    css`
      color: ${colorSchemes[props.colorscheme || "primary"]};
      &:hover {
        background-color: ${colorSchemes[props.colorscheme || "primary"]}10;
      }
    `}
`;

export type ButtonProps = ComponentProps<"button"> & {
  size?: keyof typeof buttonSizes;
  variant?: keyof typeof buttonVariants;
  colorscheme?: keyof typeof colorSchemes;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { size = "md", variant = "solid", colorscheme = "primary", ...props },
    ref
  ) => (
    <>
      <GlobalStyle />
      <StyledButton
        ref={ref}
        size={size}
        variant={variant}
        colorscheme={colorscheme}
        {...props}
      />
    </>
  )
);
