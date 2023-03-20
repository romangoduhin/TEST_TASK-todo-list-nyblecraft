import React, {useState} from 'react';
import {TextArea} from "../../ui/TextArea/TextArea";
import {TextAreaValue} from "../../types/globalTypes";
import styles from "./Header.module.scss";
import {Button} from "../../ui/Button/Button";

export const Header = () => {
    const [value, setValue] = useState<TextAreaValue>('')

    const onAddNote = () => {
        console.log(value)
    }

    return (
        <header className={styles.customHeader}>
            <TextArea className={styles.headerTextArea} value={value} setValue={setValue}
                      placeholder={"Input the note text"}/>
            <Button className={styles.headerButton} onClick={onAddNote} disabled={false} type="submit">Add Note</Button>
        </header>
    );
};
