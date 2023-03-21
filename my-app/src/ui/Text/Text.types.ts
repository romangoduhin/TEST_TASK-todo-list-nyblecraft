import {Children, ClassName} from "@globalTypes";
import React from "react";

export type TextSize = "small" | "medium" | "large";

export type ParagraphAttributes = React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

export interface TextProps extends ParagraphAttributes {
  className?: ClassName,
  size?: TextSize,
  children: Children
}