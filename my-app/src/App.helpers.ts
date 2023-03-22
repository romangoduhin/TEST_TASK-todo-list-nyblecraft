import {Note} from "./App.types";
import {isArrEmpty} from "@helpers";

const TRIM_REGEX = /  +/g;

export const getUniqueTags = (notes: Note[]): string[] => {
  if (isArrEmpty(notes)) return []

  const notesWithTags = notes.filter(note => !isArrEmpty(note.tags));
  const tags = notesWithTags.map(note => note.tags).flat();
  const uniqueTags = [...new Set(tags)];

  return uniqueTags;
}

export const getExtractedTags = (text: string): string[] => {
  const tags = text.split(' ').filter(tag => tag.startsWith('#'));

  if (!tags) return [];

  return tags;
}

export const getTrimmedStr = (str: string): string => str.replace(TRIM_REGEX, ' ').trim();