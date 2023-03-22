import React from "react";
import styles from "./FilterList.module.scss";
import {FilterListProps} from "./FilterList.types";
import {Filter} from "./Filter";
import {Grid} from "@ui";

export const FilterList: React.FC<FilterListProps> = ({filters, toggle}) => {
  return (
    <Grid className={styles.filtersGrid}>
      {filters.map((filter, index) => <Filter key={index} filter={filter} onClick={toggle}/>)}
    </Grid>
  );
};