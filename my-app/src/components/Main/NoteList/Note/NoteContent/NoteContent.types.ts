export interface NoteContentProps {
  text: string,
  setText: (text: string) => void,
  isEditing: boolean,
  onSave: () => void,
}