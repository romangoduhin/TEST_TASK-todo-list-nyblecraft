import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";
import {ButtonProps} from "./Button.types";


export const Button: React.FC<ButtonProps> = ({className, disabled, children, onClick, ...attributes}) => {
    const buttonClasses = classNames(
        styles.customButton,
        className,
        disabled && styles.disabled
    )

    return (
        <button className={buttonClasses}
                disabled={disabled}
                onClick={onClick}
                {...attributes}
        >
            {children}
        </button>
    );
};

