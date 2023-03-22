import {Note} from "../../../App.types";

export type NotesListProps = {
  activeFilters: string[],
  notes: Note[],
  deleteNote: (note: Note) => void,
  editNote: (note: Note, newText: string) => void
}