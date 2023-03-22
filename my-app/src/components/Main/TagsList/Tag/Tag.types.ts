import {Filter} from "../../Main.types";

export type TagProps = {
  filter: Filter,
  onClick: (key: string) => void
}