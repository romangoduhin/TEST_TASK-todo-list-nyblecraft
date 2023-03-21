import {Tags} from "@globalTypes";

const REGEX_PATTERN = /#[a-z0-9_]+/g;

export const extractTags = (text: string): Tags => {
  const tagsArr = text.match(REGEX_PATTERN);

  if (!tagsArr) return []

  return tagsArr
}