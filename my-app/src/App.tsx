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

    const editNote = (note: Note, newText: string): void => {
        const id = note.id

        setNotes(notes => notes.map(el => {
            if (el.id !== id) return el

            const newEl = el;
            newEl.text = newText

            return newEl;
        }))
    }

    return (
        <div className={styles.app}>
            <div className={styles.content}>
                <Header addNote={addNote}/>
                <Main deleteNote={deleteNote} editNote={editNote} notes={notes}/>
            </div>
        </div>
    )
}
