import React from "react";
import {GridProps} from "./Grid.types";
import styles from "./Grid.module.scss";
import classNames from "classnames";

export const Grid: React.FC<GridProps> = ({children, className}) => {
    const gridClasses = classNames(
        styles.customGrid,
        className,
    )

    return (
        <div className={gridClasses}>
            {children}
        </div>
    );
};
