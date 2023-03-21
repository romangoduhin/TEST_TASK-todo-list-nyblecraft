import React from "react";
import styles from "./NoteContent.module.scss";
import {NoteContentProps} from "./NoteContent.types";
import {TextArea} from "../../../../ui/TextArea/TextArea";

export const NoteContent: React.FC<NoteContentProps> = ({text, setText, isEditing, onSave}) => {

    return (<>
            {isEditing
                ? <TextArea value={text} setValue={setText} onSubmit={onSave} className={styles.content}/>
                : <p className={styles.content}>{text}</p>
            }
        </>
    );
};
