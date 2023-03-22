import {DetailedHTMLProps, TextareaHTMLAttributes} from "react";

export type TextAreaAttributes = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

export type TextAreaProps = TextAreaAttributes & {
  highlightTags?: boolean,
  value: string,
  className?: string,
  setValue: (targetValue: string) => void,
  onSubmit: () => void
}