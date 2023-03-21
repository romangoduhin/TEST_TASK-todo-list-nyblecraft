import {Note, Notes} from "../../types/globalTypes";

export interface MainProps {
    deleteNote: (note: Note) => void,
    editNote: (note: Note, newText: string) => void
    notes: Notes
}