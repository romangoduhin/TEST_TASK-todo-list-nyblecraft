import React from "react";
import styles from "./HeaderIndex.module.scss";
import {HeaderIndexProps} from "./HeaderIndex.types";
import {Text} from "@ui";

export const HeaderIndex: React.FC<HeaderIndexProps> = ({index}) => {
  return (
    <Text size={"large"} className={styles.index}>{index}</Text>
  );
};

