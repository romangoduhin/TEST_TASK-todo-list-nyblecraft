import {Filter} from "../Main.hooks";

export type TagsListProps = {
  filters: Filter[],
  toggle: (key: string) => void
}