import {useEffect, useState} from "react";
import {getFilters} from "./Main.helpers";
import {Filter, UseFiltersReturn} from "./Main.types";

export const useFilters = (tags: string[]): UseFiltersReturn => {
  const [filters, setFilters] = useState<Filter[]>([]);

  const activeFilters = filters.filter(filter => filter.isActive).map(filter => filter.key);

  const toggle = (key: string) => {
    const editedFilters = filters.map(filter => filter.key === key ? {...filter, isActive: !filter.isActive} : filter);

    setFilters(editedFilters);
  }

  useEffect(() => {
    const filters = getFilters(tags);

    setFilters(filters);
  }, [tags]);

  return {filters, activeFilters, toggle}
}