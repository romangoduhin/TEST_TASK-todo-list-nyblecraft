import React from "react";
import styles from "./NoteContent.module.scss";
import {NoteContentProps} from "./NoteContent.types";
import {Text, TextArea} from "@ui";

export const NoteContent: React.FC<NoteContentProps> = ({text, setText, isEditing, onSave}) => {

  if (isEditing) return <TextArea value={text} setValue={setText} onSubmit={onSave} className={styles.content}/>

  return <Text size={"medium"} className={styles.content}>{text}</Text>
};
