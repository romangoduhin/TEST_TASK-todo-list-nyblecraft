import React from "react";
import styles from "./NoteContent.module.scss";
import {NoteContentProps} from "./NoteContent.types";
import {Text, TextArea} from "@ui";

export const NoteContent: React.FC<NoteContentProps> = ({text, setText, isEditing, onSave}) => {
  return (<>
      {isEditing
        ? <TextArea value={text} setValue={setText} onSubmit={onSave} className={styles.content}/>
        : <Text size={"medium"} className={styles.content}>{text}</Text>
      }
    </>
  );
};
