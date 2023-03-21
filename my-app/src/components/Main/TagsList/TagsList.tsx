import React from "react";
import styles from "./TagsList.module.scss";
import {TagsListProps} from "./TagsList.types";
import {Tag} from "./Tag";
import {Grid} from "@ui";

export const TagsList: React.FC<TagsListProps> = ({tags}) => {
  return (
    <Grid className={styles.tagsGrid}>
      {tags.map((tag, index) => <Tag key={index} tag={tag}/>)}
    </Grid>
  );
};