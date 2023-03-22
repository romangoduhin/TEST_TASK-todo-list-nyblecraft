import React from "react";
import {Note} from "./Note";
import {Grid} from "@ui";
import {NotesListProps} from "./NotesList.types";
import {isArrEmpty} from "@helpers";

export const NoteList: React.FC<NotesListProps> = ({activeFilters, notes, deleteNote, editNote,}) => {
  const filteredNotes = !isArrEmpty(activeFilters) ? notes.filter(note => note.tags.some(tag => activeFilters.includes(tag))) : notes //TODO notes.filter(note => note.tags.some(tag => activeFilters.includes(tag))) to Note.helpres

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
