import {isArrEmpty} from "@helpers";
import {Note} from "../../App.types";
import {Filter} from "./Main.types";

const REGEX_PATTERN = /#[a-zA-Z0-9А-Яа-я_]+/g;

export const extractTags = (text: string): string[] => {
  const tagsArr = text.match(REGEX_PATTERN);

  if (!tagsArr) return []

  return tagsArr
}

export const getUniqueTags = (notes: Note[]): string[] => {
  const notesWithTags = notes.filter(note => !isArrEmpty(note.tags))
  const tags = notesWithTags.map(note => note.tags).flat()
  const uniqueTags = [...new Set(tags)]

  return uniqueTags
}

export const getFilters = (tags: string[]): Filter[] => tags.map(tag => ({key: tag, isActive: false}))

