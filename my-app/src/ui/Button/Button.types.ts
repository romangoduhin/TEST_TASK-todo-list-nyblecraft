import {Children, ClassName} from "../../types/globalTypes";
import React from "react";

export type ButtonAttributes = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export interface ButtonProps extends ButtonAttributes {
    className?: ClassName,
    disabled?: boolean,
    children: Children,
    onClick: () => void,
}