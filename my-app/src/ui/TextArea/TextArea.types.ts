import React from "react";
import {ClassName} from "../../types/globalTypes";

export type TextAreaAttributes = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

export interface TextAreaProps extends TextAreaAttributes {
    className?: ClassName,
    value: string,
    setValue: (targetValue: string) => void,
    onSubmit: () => void
}