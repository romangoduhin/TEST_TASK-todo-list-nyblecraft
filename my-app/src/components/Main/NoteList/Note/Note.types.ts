import {Note, Tags} from "@globalTypes";

export interface NoteProps {
  deleteNote: (note: Note) => void,
  editNote: (note: Note, newText: string, newTags: Tags) => void,
  index: number,
  data: Note
}