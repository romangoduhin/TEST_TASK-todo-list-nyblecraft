import {Id} from "@globalTypes";

export const getRandId = (): Id => {
  return Date.now();
}