import {Note, Notes, Tags} from "@globalTypes";

export interface MainProps {
  deleteNote: (note: Note) => void,
  editNote: (note: Note, newText: string, newTags: Tags) => void
  notes: Notes,
  tags: Tags
}