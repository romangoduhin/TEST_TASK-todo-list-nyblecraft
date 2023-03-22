import {Note} from "@globalTypes";

export type NotesListProps = {
  activeFilters: string[],
  notes: Note[],
  deleteNote: (note: Note) => void,
  editNote: (note: Note, newText: string) => void
}