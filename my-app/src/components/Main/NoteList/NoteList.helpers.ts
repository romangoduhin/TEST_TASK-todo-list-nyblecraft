import {Note} from "../../../App.types";
import {isArrEmpty} from "@helpers";

export const getFilteredNotes = (notes: Note[], activeFilters: string[]): Note[] => {
  const filterNotes = (notes: Note[], activeFilters: string[]): Note[] => {
    return notes.filter(note => note.tags.some(tag => activeFilters.includes(tag)));
  }

  return !isArrEmpty(activeFilters) ? filterNotes(notes, activeFilters) : notes;
}