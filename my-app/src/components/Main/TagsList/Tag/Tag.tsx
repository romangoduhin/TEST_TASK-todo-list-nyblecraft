import React from "react";
import styles from "./Tag.module.scss";
import {TagProps} from "./Tag.types";
import {Text} from "@ui";

export const Tag: React.FC<TagProps> = ({tag}) => {
  return (
    <div className={styles.tag}>
      <Text size={"medium"}>{tag}</Text>
    </div>
  );
};