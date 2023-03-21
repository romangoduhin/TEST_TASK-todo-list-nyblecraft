import React from "react";
import styles from "./Text.module.scss";
import classNames from "classnames";
import {TextProps} from "./Text.types";

export const Text: React.FC<TextProps> = ({size = "small", className, children, ...attributes}) => {
  const textClasses = classNames(
    styles.customText,
    className,
    size === "small" && styles.small,
    size === "medium" && styles.medium,
    size === "large" && styles.large
  )

  return (
    <p className={textClasses}{...attributes}>
      {children}
    </p>
  );
};

