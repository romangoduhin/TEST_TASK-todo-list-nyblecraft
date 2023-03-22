export const applyHighlights = (value: string): string => {
  const searchedValue = value.match(/#[a-z0-9_]+/g);

  if (!searchedValue) return value;

  return value.split(' ').map(el => searchedValue.includes(el) ? `<mark>${el}</mark>` : el).join(' ')
}