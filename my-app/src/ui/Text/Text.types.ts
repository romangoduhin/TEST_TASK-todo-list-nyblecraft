import React from "react";

export type TextSize = "small" | "medium" | "large";

export type ParagraphAttributes = React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

export type TextProps = ParagraphAttributes & {
  className?: string,
  size?: TextSize,
  children: React.ReactNode
}