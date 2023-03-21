import {Note} from "@globalTypes";

export interface NoteProps {
  deleteNote: (note: Note) => void,
  editNote: (note: Note, newText: string) => void,
  index: number,
  data: Note
}