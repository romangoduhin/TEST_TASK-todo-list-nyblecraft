import {Note, Notes, Tags} from "@globalTypes";

export interface NotesListProps {
  notes: Notes,
  deleteNote: (note: Note) => void,
  editNote: (note: Note, newText: string, newTags: Tags) => void
}