import React from 'react';
import {Note} from "./Note";
import {Grid} from "@ui";
import {NotesListProps} from "./NotesList.types";

export const NoteList: React.FC<NotesListProps> = ({notes, deleteNote, editNote,}) => {
  return (
    <Grid>
      {notes.map((note, index) => (
        <Note deleteNote={deleteNote}
              editNote={editNote}
              key={note.id}
              index={index}
              data={note}
        />))}
    </Grid>
  );
};
