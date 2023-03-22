import {useEffect, useState} from "react";
import {Note} from "@globalTypes";
import {getRandId, isArrEmpty} from "@helpers";
import {extractTags, getFilters, getUniqueTags} from "./Main.helpers";

export type UseNotesReturn = { //TODO to main types move to App.hooks
  notes: Note[],
  tags: string[]
  addNote: (value: string) => void,
  deleteNote: (note: Note) => void,
  editNote: (note: Note, newText: string) => void
}

export type Filter = {
  key: string,
  isActive: boolean
}

export type UseFiltersReturn = { //TODO to main types
  filters: Filter[],
  activeFilters: string[],
  toggle: (key: string) => void
}


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

export const useFilters = (tags: string[]): UseFiltersReturn => {
  const [filters, setFilters] = useState<Filter[]>([])

  const activeFilters = filters.filter(filter => filter.isActive).map(filter => filter.key)

  const toggle = (key: string) => {
    const editedFilters = filters.map(filter => filter.key === key ? {...filter, isActive: !filter.isActive} : filter)

    setFilters(editedFilters)
  }

  useEffect(() => {
    const filters = getFilters(tags)

    setFilters(filters)
  }, [tags]);

  return {filters, activeFilters, toggle}
}