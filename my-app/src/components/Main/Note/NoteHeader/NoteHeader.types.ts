import {Note} from "../../../../types/globalTypes";

export interface NoteHeaderProps {
    data: Note,
    index: number,
    isEditing: boolean,
    onEdit: () => void,
    onSave: () => void,
    onDelete: () => void
}