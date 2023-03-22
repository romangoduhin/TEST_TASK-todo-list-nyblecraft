export type Note = {
  id: number,
  text: string,
  tags: string[]
}

export type UseNotesReturn = {
  notes: Note[],
  tags: string[]
  addNote: (value: string) => void,
  deleteNote: (note: Note) => void,
  editNote: (note: Note, newText: string) => void
}