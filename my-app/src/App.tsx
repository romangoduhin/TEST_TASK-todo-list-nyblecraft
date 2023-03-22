import React from "react";
import styles from "./App.module.scss";
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {useNotes} from "./components/Main/Main.hooks";

export const App: React.FC = () => {
  const {notes, tags, addNote, deleteNote, editNote} = useNotes()

  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <Header addNote={addNote}/>
        <Main deleteNote={deleteNote} editNote={editNote} notes={notes} tags={tags}/>
      </div>
    </div>
  )
}
