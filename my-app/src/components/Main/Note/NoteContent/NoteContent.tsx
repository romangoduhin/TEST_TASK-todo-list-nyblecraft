import React from "react";
import styles from "./NoteContent.module.scss";
import {NoteContentProps} from "./NoteContent.types";

export const NoteContent: React.FC<NoteContentProps> = ({text}) => {
    return (
        <p className={styles.content}>
           {text}
        </p>
    );
};
