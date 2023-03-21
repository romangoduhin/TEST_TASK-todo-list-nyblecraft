import React from "react";
import styles from "./NoteHeader.module.scss";
import {Button} from "../../../../ui/Button/Button";
import {NoteHeaderProps} from "./NoteHeader.types";

export const NoteHeader: React.FC<NoteHeaderProps> = ({index, isEditing, onEdit, onSave, onDelete}) => {
    return (
        <div className={styles.header}>
            <p className={styles.index}>{index + 1}</p>
            <div className={styles.buttons}>
                {isEditing
                    ? <Button className={styles.saveButton} onClick={onSave}>Save</Button>
                    : <Button className={styles.editButton} onClick={onEdit}>Edit</Button>
                }

                <Button className={styles.deleteButton} onClick={onDelete}>Delete</Button>
            </div>
        </div>
    );
};
