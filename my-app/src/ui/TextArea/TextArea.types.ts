import {TextAreaValue} from "../../types/globalTypes";
import React from "react";

export type TextAreaAttributes = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

export interface TextAreaProps extends TextAreaAttributes {
    className: string,
    value: TextAreaValue,
    setValue: (targetValue: TextAreaValue) => void
}