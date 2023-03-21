import {Note, Notes} from "../../types/globalTypes";

export interface MainProps {
    deleteNote: (note: Note) => void,
    notes: Notes
}