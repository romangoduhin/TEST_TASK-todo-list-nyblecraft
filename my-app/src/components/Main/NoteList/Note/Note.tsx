import React, {useEffect, useState} from "react";
import {NoteProps} from "./Note.types";
import styles from "./Note.module.scss";
import {NoteHeader} from "./NoteHeader";
import {NoteContent} from "./NoteContent";
import {extractTags, isStrEmpty} from "@helpers";

export const Note: React.FC<NoteProps> = ({deleteNote, editNote, index, data}) => {
  const [text, setText] = useState(data.text);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaveDisabled, setTsSaveDisabled] = useState(false);

  const onEditHandler = (): void => {
    setIsEditing(prev => !prev);
  }

  const onSaveHandler = (): void => {
    onEditHandler();

    if (isStrEmpty(text)) return

    const tags = extractTags(text);

    editNote(data, text, tags)
  }

  const onDeleteHandler = (): void => {
    deleteNote(data)
  }

  useEffect(() => {
    if (isStrEmpty(text)) {
      setTsSaveDisabled(true)
      return
    }
    
    setTsSaveDisabled(false)
  }, [text]);


  return (
    <div className={styles.note}>
      <NoteHeader index={index}
                  data={data}
                  isEditing={isEditing}
                  isSaveDisabled={isSaveDisabled}
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
