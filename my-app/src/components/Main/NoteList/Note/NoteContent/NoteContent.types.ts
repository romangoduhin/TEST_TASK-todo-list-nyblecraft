export interface NoteContentProps {
  text: string,
  setText: (prev: string) => void,
  isEditing: boolean,
  onSave: () => void,
}