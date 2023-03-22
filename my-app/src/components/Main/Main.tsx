import React from "react";
import {MainProps} from "./Main.types";
import {NoteList} from "./NoteList";
import {FilterList} from "./FilterList";
import styles from "./Main.module.scss";
import {Text} from "@ui";
import {isArrEmpty} from "@helpers";
import {useFilters} from "./Main.hooks";

export const Main: React.FC<MainProps> = ({deleteNote, editNote, notes, tags}) => {
  const {filters, activeFilters, toggle} = useFilters(tags)

  if (isArrEmpty(notes)) return <Text className={styles.emptyContent} size={"large"}>Nothing To Show</Text>

  return <main className={styles.main}>
    <FilterList filters={filters} toggle={toggle}/>
    <NoteList activeFilters={activeFilters} notes={notes} deleteNote={deleteNote} editNote={editNote}/>
  </main>
};