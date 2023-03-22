import {Filter} from "../Main.types";

export type TagsListProps = {
  filters: Filter[],
  toggle: (key: string) => void
}