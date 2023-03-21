import {Id} from "../types/globalTypes";

export const getRandId = (): Id => {
    return Date.now();
}