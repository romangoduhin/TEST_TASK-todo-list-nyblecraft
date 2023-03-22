import React from "react";
import {Note} from "./Note";
import {Grid} from "@ui";
import {NotesListProps} from "./NotesList.types";
import {getFilteredNotes} from "./NoteList.helpers";

export const NoteList: React.FC<NotesListProps> = ({activeFilters, notes, deleteNote, editNote,}) => {
  const filteredNotes = getFilteredNotes(notes, activeFilters);

  return (
    <Grid>
      {filteredNotes.map((note, index) => (
        <Note deleteNote={deleteNote}
              editNote={editNote}
              key={note.id}
              index={index}
              data={note}
        />))}
    </Grid>
  );
};
