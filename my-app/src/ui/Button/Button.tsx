import React from "react";
import styles from "./Button.module.scss";
import {ButtonProps} from "./Button.types";
import classNames from "classnames";

export const Button: React.FC<ButtonProps> = ({className, disabled = false, children, onClick, ...attributes}) => {
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

