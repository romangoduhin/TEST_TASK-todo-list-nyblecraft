import {getExtractedTags} from "../../App.helpers";

export const applyHighlights = (text: string): string => {
  const tags = getExtractedTags(text);

  if (!tags) return text;

  return text.split(' ').map(el => tags.includes(el) ? `<mark>${el}</mark>` : el).join(' ')
}