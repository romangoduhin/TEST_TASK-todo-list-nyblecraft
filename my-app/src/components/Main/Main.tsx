import React from "react";
import {Grid} from "@ui";
import {MainProps} from "./Main.types";
import styles from "./Main.module.scss";
import {Note} from "./Note";

export const Main: React.FC<MainProps> = ({deleteNote, editNote, notes}) => {
  return (
    <main className={styles.main}>
      <Grid>
        {notes.map((note, index) => (
          <Note deleteNote={deleteNote}
                editNote={editNote}
                key={note.id}
                index={index}
                data={note}
          />))}
      </Grid>
    </main>
  );
};