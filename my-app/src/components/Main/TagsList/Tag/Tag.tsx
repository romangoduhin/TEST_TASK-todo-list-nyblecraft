import React from "react";
import styles from "./Tag.module.scss";
import {TagProps} from "./Tag.types";
import {Text} from "@ui";
import classNames from "classnames";

export const Tag: React.FC<TagProps> = ({filter, onClick}) => { //TODO Rename to filter
  const onClickHandler = (): void => {
    onClick(filter.key)
  }

  const tagClasses = classNames(
    styles.tag,
    filter.isActive && styles.active
  )

  return (
    <div className={tagClasses} onClick={onClickHandler}>
      <Text size={"medium"}>{filter.key}</Text>
    </div>
  );
};