import {Filter} from "./Main.types";

export const getFilters = (tags: string[]): Filter[] => {
  return tags.map(tag => ({key: tag, isActive: false}));
}

export const getActiveFilters = (filters: Filter[]): string[] => {
  return filters.filter(filter => filter.isActive).map(filter => filter.key);
}

export const getToggledFilters = (filters: Filter[], key: string): Filter[] => {
  const activateFilter = (filter: Filter) => ({...filter, isActive: !filter.isActive});

  return filters.map(filter => filter.key === key ? activateFilter(filter) : filter);
}

