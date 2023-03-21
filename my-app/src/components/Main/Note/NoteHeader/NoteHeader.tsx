import React from "react";
import styles from "./NoteHeader.module.scss";
import {NoteHeaderProps} from "./NoteHeader.types";
import {HeaderButtons} from "./HeaderButtons";
import {HeaderIndex} from "./HeaderIndex";

export const NoteHeader: React.FC<NoteHeaderProps> = ({index, isEditing, onEdit, onSave, onDelete}) => {
  return (
    <div className={styles.header}>
      <HeaderIndex index={index + 1}/>
      <HeaderButtons isEditing={isEditing} onEdit={onEdit} onSave={onSave} onDelete={onDelete}/>
    </div>
  );
};
