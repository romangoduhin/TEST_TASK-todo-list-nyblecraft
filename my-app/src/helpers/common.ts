export const isArrEmpty = (arr: any[]): boolean => {
  return !arr.length
}

export const isStrEmpty = (str: string): boolean => {
  return !str.trim()
}

export const getRandId = (): number => {
  return Date.now()
}