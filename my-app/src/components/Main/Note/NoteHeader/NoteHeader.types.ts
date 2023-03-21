import {Note} from "../../../../types/globalTypes";

export interface NoteHeaderProps {
    data: Note,
    index: number,
    onDelete: (note: Note) => void
}