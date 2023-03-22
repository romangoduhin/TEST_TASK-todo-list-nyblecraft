import React from "react";
import styles from "./Filter.module.scss";
import {FilterProps} from "./Filter.types";
import {Button, Text} from "@ui";
import classNames from "classnames";

export const Filter: React.FC<FilterProps> = ({filter, onClick}) => {
  const onClickHandler = (): void => {
    onClick(filter.key)
  }

  const filterClasses = classNames(
    styles.filterButton,
    filter.isActive && styles.active
  )

  return (
    <Button className={filterClasses} onClick={onClickHandler}>
      <Text size={"small"}>
        {filter.key}
      </Text>
    </Button>
  );
};