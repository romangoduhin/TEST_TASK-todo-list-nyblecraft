import React from "react";
import styles from "./NoteHeader.module.scss";
import {Button} from "../../../../ui/Button/Button";
import {NoteHeaderProps} from "./NoteHeader.types";

export const NoteHeader: React.FC<NoteHeaderProps> = ({index, data, onDelete}) => {
    const onClickHandler = (): void => {
        onDelete(data)
    }

    return (
        <div className={styles.header}>
            <p className={styles.index}>{index + 1}</p>
            <Button className={styles.deleteButton} onClick={onClickHandler}>Delete</Button>
        </div>
    );
};
