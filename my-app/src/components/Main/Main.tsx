import React from "react";
import {MainProps} from "./Main.types";
import {NoteList} from "./NoteList";
import {TagsList} from "./TagsList";
import styles from "./Main.module.scss";

export const Main: React.FC<MainProps> = ({deleteNote, editNote, notes, tags}) => {
  return (
    <main className={styles.main}>
      <TagsList tags={tags}/>
      <NoteList notes={notes} deleteNote={deleteNote} editNote={editNote}/>
    </main>
  );
};