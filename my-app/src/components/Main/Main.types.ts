import {Note} from "@globalTypes";

export type MainProps = {
  deleteNote: (note: Note) => void,
  editNote: (note: Note, newText: string) => void
  notes: Note[],
  tags: string[]
}