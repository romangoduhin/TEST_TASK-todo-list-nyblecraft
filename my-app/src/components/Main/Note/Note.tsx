import React from "react";
import {NoteProps} from "./Note.types";
import styles from "./Note.module.scss";
import {NoteHeader} from "./NoteHeader/NoteHeader";
import {NoteContent} from "./NoteContent/NoteContent";

export const Note: React.FC<NoteProps> = ({deleteNote, index, data}) => {
    return (
        <div className={styles.note}>
            <NoteHeader index={index} data={data} onDelete={deleteNote}/>
            <NoteContent text={data.text}/>
        </div>
    );
};
