import {Filter} from "../../Main.hooks";

export type TagProps = {
  filter: Filter,
  onClick: (key: string) => void
}