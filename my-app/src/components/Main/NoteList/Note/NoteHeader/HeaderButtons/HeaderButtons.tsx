import React from "react";
import styles from "./HeaderButtons.module.scss";
import {HeaderButtonsProps} from "./HeaderButtons.types";
import {Button} from "@ui";

export const HeaderButtons: React.FC<HeaderButtonsProps> = ({isEditing, onEdit, onSave, onDelete}) => {
  return (
    <div className={styles.buttons}>
      {isEditing
        ? <Button className={styles.saveButton} onClick={onSave}>Save</Button>
        : <Button className={styles.editButton} onClick={onEdit}>Edit</Button>
      }

      <Button className={styles.deleteButton} onClick={onDelete}>Delete</Button>
    </div>
  );
};

