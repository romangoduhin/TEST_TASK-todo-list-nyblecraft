import React from "react";
import styles from "./TextArea.module.scss";
import {TextAreaChangeEvent} from "../../types/globalTypes";
import {TextAreaProps} from "./TextArea.types";
import classNames from "classnames";

export const TextArea: React.FC<TextAreaProps> = ({className, value, setValue, ...attributes}) => {
    const textAreaClasses = classNames(
        styles.customTextArea,
        className,
    )

    const onChangeHandler = (event: TextAreaChangeEvent) => {
        const targetValue = event.target.value;

        setValue(targetValue)
    }

    return (
        <textarea className={textAreaClasses}
                  value={value}
                  onChange={onChangeHandler}
                  {...attributes}
        />
    );
};

