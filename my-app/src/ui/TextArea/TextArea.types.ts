import React from "react";

export type TextAreaAttributes = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

export type TextAreaProps = TextAreaAttributes & {
  className?: string,
  value: string,
  setValue: (targetValue: string) => void,
  onSubmit: () => void
}