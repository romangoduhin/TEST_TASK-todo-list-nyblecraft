import React, {useState} from "react";
import {Button, TextArea} from "@ui";
import styles from "./Header.module.scss";
import {HeaderProps} from "./Header.types";
import {extractTags, getRandId} from "@helpers";

export const Header: React.FC<HeaderProps> = ({addNote}) => {
  const [value, setValue] = useState<string>('')

  const clearValue = (): void => {
    setValue('')
  }

  const onSubmitHandler = (): void => {
    const trimmedValue = value.trim();

    if (!trimmedValue) return

    const tags = extractTags(trimmedValue)

    const note = {
      id: getRandId(),
      text: trimmedValue,
      tags
    }

    addNote(note)
    clearValue()
  }

  return (
    <header className={styles.header}>
      <TextArea className={styles.headerTextArea}
                value={value}
                setValue={setValue}
                placeholder={"Input the note text"}
                onSubmit={onSubmitHandler}
      />

      <Button className={styles.headerButton}
              onClick={onSubmitHandler}
              disabled={false}
              type="submit">
        Add Note
      </Button>
    </header>
  );
};
