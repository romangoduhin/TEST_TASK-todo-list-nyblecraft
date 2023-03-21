import {Note} from "../../../types/globalTypes";

export interface NoteProps {
    deleteNote: (note: Note) => void,
    index: number,
    data: Note
}