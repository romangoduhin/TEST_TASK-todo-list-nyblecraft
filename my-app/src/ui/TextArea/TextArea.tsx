import React from "react";
import styles from "./TextArea.module.scss";
import {TextAreaProps} from "./TextArea.types";
import classNames from "classnames";
import {ChangeEvent, KeyboardEvent} from "../../types/globalTypes";

const ENTER_KEY_CODE = "Enter";

export const TextArea: React.FC<TextAreaProps> = ({className, value, setValue, onSubmit, ...attributes}) => {
    const textAreaClasses = classNames(
        styles.customTextArea,
        className,
    )

    const onKeyDownHandler = (event: KeyboardEvent<HTMLTextAreaElement>): void => {
        const isKeyEnter = event.code === ENTER_KEY_CODE;
        const isKeyShifted = event.shiftKey;

        if (isKeyEnter && !isKeyShifted) {
            event.preventDefault();
            onSubmit()
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        const value = event.target.value;

        setValue(value)
    }

    return (
        <textarea className={textAreaClasses}
                  value={value}
                  onChange={onChangeHandler}
                  onKeyDown={onKeyDownHandler}
                  {...attributes}
        />
    );
};

