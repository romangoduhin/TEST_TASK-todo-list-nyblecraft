import React, {useState} from "react";
import styles from "./App.module.scss";
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Note, Notes} from "./types/globalTypes";

export const App: React.FC = () => {
    const [notes, setNotes] = useState<Notes>([]);

    const addNote = (note: Note): void => {
        setNotes(notes => [...notes, note]);
    }

    const deleteNote = (note: Note): void => {
        const id = note.id

        setNotes(notes => notes.filter(el => el.id !== id))
    }

    return (
        <div className={styles.app}>
            <div className={styles.content}>
                <Header addNote={addNote}/>
                <Main deleteNote={deleteNote} notes={notes}/>
            </div>
        </div>
    )
}
