import {ReactNode, DetailedHTMLProps, HTMLAttributes} from "react";

export type TextSize = "small" | "medium" | "large";

export type ParagraphAttributes = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

export type TextProps = ParagraphAttributes & {
  className?: string,
  size?: TextSize,
  children: ReactNode
}