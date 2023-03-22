import {Note} from "../../../../App.types";

export type NoteProps = {
  deleteNote: (note: Note) => void,
  editNote: (note: Note, newText: string) => void,
  index: number,
  data: Note
}