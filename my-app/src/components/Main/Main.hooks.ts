import {useEffect, useState} from "react";
import {getActiveFilters, getFilters, getToggledFilters} from "./Main.helpers";
import {Filter, UseFiltersReturn} from "./Main.types";

export const useFilters = (tags: string[]): UseFiltersReturn => {
  const [filters, setFilters] = useState<Filter[]>([]);

  const activeFilters = getActiveFilters(filters);

  const toggle = (key: string): void => {
    const toggledFilters = getToggledFilters(filters, key);

    setFilters(toggledFilters);
  }

  useEffect(() => {
    const filters = getFilters(tags);

    setFilters(filters);
  }, [tags]);

  return {filters, activeFilters, toggle}
}