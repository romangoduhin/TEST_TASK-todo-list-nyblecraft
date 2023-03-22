import {useEffect, useState} from "react";
import {getRandId, isArrEmpty} from "@helpers";
import {Note, UseNotesReturn} from "./App.types";
import {getExtractedTags, getUniqueTags} from "./App.helpers";

export const useNotes = (): UseNotesReturn => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  const addNote = (value: string): void => {
    const tags = getExtractedTags(value)

    const note = {
      id: getRandId(),
      text: value,
      tags
    }

    setNotes(notes => [...notes, note]);
  }

  const deleteNote = (note: Note): void => {
    const {id} = note;

    const filteredNotes = notes.filter(note => note.id !== id);

    setNotes(filteredNotes);
  }

  const editNote = (note: Note, newText: string): void => {
    const {id} = note;

    const tags = getExtractedTags(newText);

    const editedNotes = notes.map(note => note.id === id ? {...note, text: newText, tags} : note);

    setNotes(editedNotes);
  }

  useEffect(() => {
    if (isArrEmpty(notes)) {
      setTags([]);

      return;
    }

    const uniqueTags = getUniqueTags(notes);

    if (!uniqueTags) return;

    setTags(uniqueTags);
  }, [notes]);

  return {notes, tags, addNote, deleteNote, editNote};
}