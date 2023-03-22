import React from "react";
import styles from "./TagsList.module.scss";
import {TagsListProps} from "./TagsList.types";
import {Tag} from "./Tag";
import {Grid} from "@ui";

export const TagsList: React.FC<TagsListProps> = ({filters, toggle}) => {
  return (
    <Grid className={styles.tagsGrid}>
      {filters.map((filter, index) => <Tag key={index} filter={filter} onClick={toggle}/>)}
    </Grid>
  );
};