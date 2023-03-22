import React from "react";

export type ButtonAttributes = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export type ButtonProps = ButtonAttributes & {
  className?: string,
  disabled?: boolean,
  children: React.ReactNode,
  onClick: () => void,
}