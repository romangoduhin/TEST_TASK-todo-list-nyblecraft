export type NoteHeaderProps = {
  index: number,
  isEditing: boolean,
  isSaveDisabled: boolean,
  onEdit: () => void,
  onSave: () => void,
  onDelete: () => void
}