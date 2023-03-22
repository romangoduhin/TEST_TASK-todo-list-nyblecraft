import {Note} from "./App.types";
import {isArrEmpty} from "@helpers";

const REGEX_PATTERN = /#[a-zA-Z0-9А-Яа-я_]+/g;

export const getUniqueTags = (notes: Note[]): string[] => {
  const notesWithTags = notes.filter(note => !isArrEmpty(note.tags));
  const tags = notesWithTags.map(note => note.tags).flat();
  const uniqueTags = [...new Set(tags)];

  return uniqueTags;
}

export const extractTags = (text: string): string[] => {
  const tags = text.match(REGEX_PATTERN);

  if (!tags) return [];

  return tags;
}