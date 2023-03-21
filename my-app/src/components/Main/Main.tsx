import React from "react";
import {MainProps} from "./Main.types";
import {NoteList} from "./NoteList";
import {TagsList} from "./TagsList";
import styles from "./Main.module.scss";
import {Text} from "@ui";
import {isArrEmpty} from "@helpers";

export const Main: React.FC<MainProps> = ({deleteNote, editNote, notes, tags}) => {
  if (isArrEmpty(notes)) return <Text className={styles.emptyContent} size={"large"}>Nothing To Show</Text>

  return <main className={styles.main}>
    <TagsList tags={tags}/>
    <NoteList notes={notes} deleteNote={deleteNote} editNote={editNote}/>
  </main>
};