import React, {useState} from "react";
import {Button, TextArea} from "@ui";
import styles from "./Header.module.scss";
import {HeaderProps} from "./Header.types";
import {getRandId} from "../../helpers/getRandId";

export const Header: React.FC<HeaderProps> = ({addNote}) => {
  const [value, setValue] = useState<string>('')

  const clearValue = (): void => {
    setValue('')
  }

  const onSubmitHandler = (): void => {
    if (!value) return

    const note = {
      id: getRandId(),
      text: value,
      tags: []
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
