import React, {useState} from "react";
import {NoteProps} from "./Note.types";
import styles from "./Note.module.scss";
import {NoteHeader} from "./NoteHeader/NoteHeader";
import {NoteContent} from "./NoteContent/NoteContent";

export const Note: React.FC<NoteProps> = ({deleteNote, editNote, index, data}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(data.text);

    const onEditHandler = ():void => {
        setIsEditing(prev => !prev);
    }

    const onSaveHandler = (): void => {
        onEditHandler();

        if (!text) return;

        editNote(data, text)
    }

    const onDeleteHandler = (): void => {
        deleteNote(data)
    }

    return (
        <div className={styles.note}>
            <NoteHeader index={index}
                        data={data}
                        isEditing={isEditing}
                        onEdit={onEditHandler}
                        onSave={onSaveHandler}
                        onDelete={onDeleteHandler}
            />

            <NoteContent text={text}
                         setText={setText}
                         isEditing={isEditing}
                         onSave={onSaveHandler}
            />
        </div>
    );
};
