import {DetailedHTMLProps, TextareaHTMLAttributes} from "react";

export type TextAreaAttributes = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

export type TextAreaProps = TextAreaAttributes & {
  className?: string,
  value: string,
  setValue: (targetValue: string) => void,
  onSubmit: () => void
}