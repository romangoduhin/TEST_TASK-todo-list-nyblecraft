export const removeDuplicates = (arr: Array<any>): Array<any> => {
  return [...new Set(arr)]
}