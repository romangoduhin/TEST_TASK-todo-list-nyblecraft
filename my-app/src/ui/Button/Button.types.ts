import {Children} from "../../types/globalTypes";
import React from "react";

export type ButtonAttributes = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export interface ButtonProps extends ButtonAttributes {
    className?: string,
    disabled: boolean,
    children: Children,
    onClick: () => void,
}