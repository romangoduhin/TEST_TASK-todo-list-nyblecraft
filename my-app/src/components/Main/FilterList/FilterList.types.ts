import {Filter} from "../Main.types";

export type FilterListProps = {
  filters: Filter[],
  toggle: (key: string) => void
}