import React, {useState} from "react";
import {Button, TextArea} from "@ui";
import styles from "./Header.module.scss";
import {HeaderProps} from "./Header.types";
import {isStrEmpty} from "@helpers";

export const Header: React.FC<HeaderProps> = ({addNote}) => {
  const [value, setValue] = useState<string>('')

  const isSubmitDisabled = isStrEmpty(value)

  const clearValue = (): void => {
    setValue('')
  }

  const onSubmitHandler = (): void => {
    if (isStrEmpty(value)) return

    addNote(value)
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
              disabled={isSubmitDisabled}
              type="submit">
        Add Note
      </Button>
    </header>
  );
};
