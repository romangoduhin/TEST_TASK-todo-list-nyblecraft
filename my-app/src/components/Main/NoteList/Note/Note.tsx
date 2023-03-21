import React, {useState} from "react";
import {NoteProps} from "./Note.types";
import styles from "./Note.module.scss";
import {NoteHeader} from "./NoteHeader";
import {NoteContent} from "./NoteContent";
import {extractTags} from "@helpers";

export const Note: React.FC<NoteProps> = ({deleteNote, editNote, index, data}) => {
  const [text, setText] = useState(data.text);
  const [isEditing, setIsEditing] = useState(false);

  const onEditHandler = (): void => {
    setIsEditing(prev => !prev);
  }

  const onSaveHandler = (): void => {
    onEditHandler();

    const tags = extractTags(text);

    editNote(data, text, tags)
  }

  const onDeleteHandler = (): void => {
    deleteNote(data)
  }

  return (
    <div className={styles.note}>
      <NoteHeader index={index}
                  data={data}
                  isEditing={isEditing}
                  onEdit={onEditHandler}
                  onSave={onSaveHandler}
                  onDelete={onDeleteHandler}
      />

      <NoteContent text={text}
                   setText={setText}
                   isEditing={isEditing}
                   onSave={onSaveHandler}
      />
    </div>
  );
};