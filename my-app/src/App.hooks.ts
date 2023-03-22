import {useEffect, useState} from "react";
import {extractTags, getUniqueTags} from "./components/Main/Main.helpers";
import {getRandId, isArrEmpty} from "@helpers";
import {Note, UseNotesReturn} from "./App.types";

export const useNotes = (): UseNotesReturn => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  const addNote = (value: string): void => {
    const tags = extractTags(value)

    const note = {
      id: getRandId(),
      text: value,
      tags
    }

    setNotes(notes => [...notes, note])
  }

  const deleteNote = (note: Note): void => {
    const id = note.id //TODO

    setNotes(notes => notes.filter(note => note.id !== id)) //TODO
  }

  const editNote = (note: Note, newText: string): void => {
    const {id} = note

    const tags = extractTags(newText);

    const editedNotes = notes.map(note => note.id === id ? {...note, text: newText, tags} : note)

    setNotes(editedNotes)
  }

  useEffect(() => {
    if (isArrEmpty(notes)) {
      setTags([])

      return;
    }

    const uniqueTags = getUniqueTags(notes)

    if (!uniqueTags) return

    setTags(uniqueTags)
  }, [notes]);

  return {notes, tags, addNote, deleteNote, editNote};
}