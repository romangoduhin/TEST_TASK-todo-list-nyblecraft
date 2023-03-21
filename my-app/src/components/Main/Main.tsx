import React from "react";
import {Grid} from "../../ui/Grid/Grid";
import {MainProps} from "./Main.types";
import styles from "./Main.module.scss";
import {Note} from "./Note/Note";

export const Main: React.FC<MainProps> = ({deleteNote, notes}) => {
    return (
        <main className={styles.main}>
            <Grid>
                {notes.map((note, ind) => <Note deleteNote={deleteNote} key={note.id} index={ind} data={note}/>)}
            </Grid>
        </main>
    );
};