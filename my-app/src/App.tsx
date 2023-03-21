import React, {useEffect, useState} from "react";
import styles from "./App.module.scss";
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {Note, Notes, Tags} from "@globalTypes";
import {isArrEmpty, removeDuplicates} from "@helpers";

export const App: React.FC = () => {
  const [notes, setNotes] = useState<Notes>([]);
  const [tags, setTags] = useState<Tags>([]);

  const addNote = (note: Note): void => {
    setNotes(notes => [...notes, note]);
  }

  const deleteNote = (note: Note): void => {
    const id = note.id

    setNotes(notes => notes.filter(el => el.id !== id))
  }

  const editNote = (note: Note, newText: string, newTags: Tags): void => {
    const id = note.id

    setNotes(notes => notes.map(el => {
      if (el.id !== id) return el

      el.text = newText
      el.tags = newTags

      return el;
    }))
  }

  useEffect(() => {
    if (isArrEmpty(notes)) {
      setTags([])

      return;
    }

    const notesWithTags = notes.filter(note => !isArrEmpty(note.tags))
    const tags = notesWithTags.map(note => note.tags).flat()

    const uniqueTags = removeDuplicates(tags);

    if (!uniqueTags) return

    setTags(uniqueTags)
  }, [notes]);


  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <Header addNote={addNote}/>
        <Main deleteNote={deleteNote} editNote={editNote} notes={notes} tags={tags}/>
      </div>
    </div>
  )
}
