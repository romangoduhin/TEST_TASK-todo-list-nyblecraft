import {Note} from "../../App.types";

export type Filter = {
  key: string,
  isActive: boolean
}

export type UseFiltersReturn = {
  filters: Filter[],
  activeFilters: string[],
  toggle: (key: string) => void
}

export type MainProps = {
  deleteNote: (note: Note) => void,
  editNote: (note: Note, newText: string) => void
  notes: Note[],
  tags: string[]
}